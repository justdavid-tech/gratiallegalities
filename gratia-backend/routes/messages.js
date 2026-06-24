const express = require("express");
const router = express.Router();

const Message = require("../models/Message");
const Client = require("../models/Client");
const requireAdmin = require("../middleware/requireAdmin");
const { notifyAdminNewMessage } = require("../utils/mailer");

// ─────────────────────────────────────────────────────────────────────────────
// CLIENT ROUTES (protected by client access token from portal/verify)
// ─────────────────────────────────────────────────────────────────────────────

// Middleware to verify client JWT token
const requireClient = (req, res, next) => {
  const jwt = require("jsonwebtoken");
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "client") return res.status(403).json({ message: "Forbidden." });
    req.client = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Session expired. Please log in again." });
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/messages/thread
// Client fetches their full conversation thread
// Header: Authorization: Bearer <clientAccessToken>
// ─────────────────────────────────────────────────────────────────────────────
router.get("/thread", requireClient, async (req, res) => {
  try {
    const messages = await Message.find({ referenceNumber: req.client.ref })
      .sort({ createdAt: 1 });

    // Mark all admin messages as read by client
    await Message.updateMany(
      { referenceNumber: req.client.ref, sender: "admin", readByClient: false },
      { readByClient: true }
    );

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/messages/send
// Client sends a message
// Header: Authorization: Bearer <clientAccessToken>
// Body: { content }
// ─────────────────────────────────────────────────────────────────────────────
router.post("/send", requireClient, async (req, res) => {
  try {
    const { content } = req.body;
    if (!content || !content.trim()) {
      return res.status(400).json({ message: "Message content is required." });
    }
    if (content.trim().length > 2000) {
      return res.status(400).json({ message: "Message cannot exceed 2000 characters." });
    }

    const message = await Message.create({
      referenceNumber: req.client.ref,
      sender: "client",
      content: content.trim(),
      readByAdmin: false,
      readByClient: true,
    });

    // Send email notification to admin
    const client = await Client.findOne({ referenceNumber: req.client.ref });
    if (client) {
      await notifyAdminNewMessage({
        clientName: client.name,
        referenceNumber: client.referenceNumber,
        message: content.trim(),
      });
    }

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// ADMIN ROUTES (protected by admin JWT)
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/messages/admin/all
// Admin fetches all threads with unread counts
// ─────────────────────────────────────────────────────────────────────────────
router.get("/admin/all", requireAdmin, async (req, res) => {
  try {
    // Get all clients that have messages
    const threads = await Message.aggregate([
      {
        $sort: { createdAt: -1 },
      },
      {
        $group: {
          _id: "$referenceNumber",
          lastMessage: { $first: "$content" },
          lastMessageAt: { $first: "$createdAt" },
          lastSender: { $first: "$sender" },
          unreadCount: {
            $sum: {
              $cond: [
                { $and: [{ $eq: ["$sender", "client"] }, { $eq: ["$readByAdmin", false] }] },
                1,
                0,
              ],
            },
          },
        },
      },
      { $sort: { lastMessageAt: -1 } },
    ]);

    // Populate client names
    const populated = await Promise.all(
      threads.map(async (thread) => {
        const client = await Client.findOne({ referenceNumber: thread._id });
        return {
          ...thread,
          clientName: client ? client.name : "Unknown Client",
        };
      })
    );

    res.json(populated);
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/messages/admin/thread/:ref
// Admin fetches full thread for a specific client
// ─────────────────────────────────────────────────────────────────────────────
router.get("/admin/thread/:ref", requireAdmin, async (req, res) => {
  try {
    const messages = await Message.find({
      referenceNumber: req.params.ref.toUpperCase(),
    }).sort({ createdAt: 1 });

    // Mark all client messages as read by admin
    await Message.updateMany(
      { referenceNumber: req.params.ref.toUpperCase(), sender: "client", readByAdmin: false },
      { readByAdmin: true }
    );

    const client = await Client.findOne({ referenceNumber: req.params.ref.toUpperCase() });

    res.json({ messages, client: client || null });
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/messages/admin/reply/:ref
// Admin replies to a client thread
// Body: { content }
// ─────────────────────────────────────────────────────────────────────────────
router.post("/admin/reply/:ref", requireAdmin, async (req, res) => {
  try {
    const { content } = req.body;
    if (!content || !content.trim()) {
      return res.status(400).json({ message: "Reply content is required." });
    }

    const client = await Client.findOne({ referenceNumber: req.params.ref.toUpperCase() });
    if (!client) return res.status(404).json({ message: "Client not found." });

    const message = await Message.create({
      referenceNumber: req.params.ref.toUpperCase(),
      sender: "admin",
      content: content.trim(),
      readByAdmin: true,
      readByClient: false,
    });

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/messages/admin/unread-count
// Returns total number of unread messages across all clients (for badge)
// ─────────────────────────────────────────────────────────────────────────────
router.get("/admin/unread-count", requireAdmin, async (req, res) => {
  try {
    const count = await Message.countDocuments({ sender: "client", readByAdmin: false });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

module.exports = router;