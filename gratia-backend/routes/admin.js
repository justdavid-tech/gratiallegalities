const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const Client = require("../models/Client");
const Admin = require("../models/Admin");
const requireAdmin = require("../middleware/requireAdmin");
const upload = require("../middleware/upload");

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/admin/login
// Body: { email, password }
// Returns: { token }
// ─────────────────────────────────────────────────────────────────────────────
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    let admin = await Admin.findOne({ email: email.toLowerCase() });

    if (admin) {
      const isMatch = await admin.verifyPassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid admin credentials." });
      }
    } else {
      if (
        email !== process.env.ADMIN_EMAIL ||
        password !== process.env.ADMIN_PASSWORD
      ) {
        return res.status(401).json({ message: "Invalid admin credentials." });
      }
      // Seed admin credentials into database
      admin = await Admin.create({ email: email.toLowerCase(), password });
    }

    const token = jwt.sign(
      { role: "admin", email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "8h" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// All routes below require a valid admin JWT
router.use(requireAdmin);

// ─────────────────────────────────────────────────────────────────────────────
// PUT /api/admin/change-password
// Body: { currentPassword, newPassword }
// Updates admin password
// ─────────────────────────────────────────────────────────────────────────────
router.put("/change-password", async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: "New password must be at least 6 characters." });
    }

    let admin = await Admin.findOne({ email: req.admin.email.toLowerCase() });
    
    // Fallback seed in case admin was logged in via env but not seeded in DB yet
    if (!admin && req.admin.email === process.env.ADMIN_EMAIL) {
      admin = await Admin.create({ email: req.admin.email.toLowerCase(), password: currentPassword });
    }

    if (!admin) {
      return res.status(404).json({ message: "Admin account not found." });
    }

    const isMatch = await admin.verifyPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect current password." });
    }

    admin.password = newPassword;
    await admin.save();

    res.json({ message: "Admin password updated successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/admin/clients
// Returns all clients (no passwords)
// ─────────────────────────────────────────────────────────────────────────────
router.get("/clients", async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/admin/clients
// Body: { name, referenceNumber, password, status }
// Creates a new client
// ─────────────────────────────────────────────────────────────────────────────
router.post("/clients", async (req, res) => {
  try {
    const { name, referenceNumber, password, status, phone } = req.body;

    const existing = await Client.findOne({ referenceNumber: referenceNumber.toUpperCase() });
    if (existing) {
      return res.status(400).json({ message: "Reference number already exists." });
    }

    const client = await Client.create({ name, referenceNumber, password, status, phone });
    res.status(201).json(client);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// PUT /api/admin/clients/:ref
// Body: { name, status }
// Updates client name and/or status
// ─────────────────────────────────────────────────────────────────────────────
router.put("/clients/:ref", async (req, res) => {
  try {
    const { name, status, phone } = req.body;
    const client = await Client.findOneAndUpdate(
      { referenceNumber: req.params.ref.toUpperCase() },
      { name, status, phone },
      { new: true, runValidators: true }
    );
    if (!client) return res.status(404).json({ message: "Client not found." });
    res.json(client);
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// PUT /api/admin/clients/:ref/password
// Body: { newPassword }
// Changes a client's password
// ─────────────────────────────────────────────────────────────────────────────
router.put("/clients/:ref/password", async (req, res) => {
  try {
    const { newPassword } = req.body;
    if (!newPassword || newPassword.length < 4) {
      return res.status(400).json({ message: "Password must be at least 4 characters." });
    }

    const client = await Client.findOne({ referenceNumber: req.params.ref.toUpperCase() });
    if (!client) return res.status(404).json({ message: "Client not found." });

    client.password = newPassword; // pre-save hook hashes it
    await client.save();

    res.json({ message: "Password updated successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/admin/clients/:ref/upload
// Form-data: file (PDF)
// Uploads and links a PDF to a client
// ─────────────────────────────────────────────────────────────────────────────
router.post("/clients/:ref/upload", upload.single("file"), async (req, res) => {
  try {
    const client = await Client.findOne({ referenceNumber: req.params.ref.toUpperCase() });
    if (!client) {
      if (req.file) fs.unlinkSync(req.file.path);
      return res.status(404).json({ message: "Client not found." });
    }

    // Delete old PDF if it exists
    if (client.pdfPath && fs.existsSync(client.pdfPath)) {
      fs.unlinkSync(client.pdfPath);
    }

    client.pdfPath = req.file.path;
    client.pdfOriginalName = req.file.originalname;
    if (client.status === "pending") client.status = "active";
    await client.save();

    res.json({ message: "PDF uploaded successfully.", client });
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// DELETE /api/admin/clients/:ref
// Deletes a client and their PDF
// ─────────────────────────────────────────────────────────────────────────────
router.delete("/clients/:ref", async (req, res) => {
  try {
    const client = await Client.findOneAndDelete({ referenceNumber: req.params.ref.toUpperCase() });
    if (!client) return res.status(404).json({ message: "Client not found." });

    if (client.pdfPath && fs.existsSync(client.pdfPath)) {
      fs.unlinkSync(client.pdfPath);
    }

    res.json({ message: "Client deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

module.exports = router;
