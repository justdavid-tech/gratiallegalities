const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const Client = require("../models/Client");
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

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ message: "Invalid admin credentials." });
    }

    const token = jwt.sign(
      { role: "admin", email },
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
    const { name, referenceNumber, password, status } = req.body;

    const existing = await Client.findOne({ referenceNumber: referenceNumber.toUpperCase() });
    if (existing) {
      return res.status(400).json({ message: "Reference number already exists." });
    }

    const client = await Client.create({ name, referenceNumber, password, status });
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
    const { name, status } = req.body;
    const client = await Client.findOneAndUpdate(
      { referenceNumber: req.params.ref.toUpperCase() },
      { name, status },
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
