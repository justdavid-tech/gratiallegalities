const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const Client = require("../models/Client");
const requireAdmin = require("../middleware/requireAdmin");

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/portal/verify
// Body: { referenceNumber, password }
// Verifies client credentials. Returns a short-lived access token.
// ─────────────────────────────────────────────────────────────────────────────
router.post("/verify", async (req, res) => {
  try {
    const { referenceNumber, password } = req.body;

    if (!referenceNumber || !password) {
      return res.status(400).json({ message: "Reference number and password are required." });
    }

    const client = await Client.findOne({ referenceNumber: referenceNumber.toUpperCase() });

    // Use the same error for wrong ref AND wrong password (security: no guessing)
    if (!client) {
      return res.status(401).json({ message: "Invalid reference number or password." });
    }

    if (client.status === "expired") {
      return res.status(403).json({ message: "Your access has expired. Please contact your business lawyer." });
    }

    if (client.status === "pending" || !client.pdfPath) {
      return res.status(403).json({ message: "Your document is not ready yet. Please contact your business lawyer." });
    }

    const isMatch = await client.verifyPassword(password);
    if (!isMatch) {
      // Log failed attempt
      client.accessLog.push({ action: "failed_login", ip: req.ip });
      await client.save();
      return res.status(401).json({ message: "Invalid reference number or password." });
    }

    // Log successful login
    client.accessLog.push({ action: "login", ip: req.ip });
    await client.save();

    // Issue a short-lived JWT for PDF access (1 hour)
    const jwt = require("jsonwebtoken");
    const accessToken = jwt.sign(
      { ref: client.referenceNumber, role: "client" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      accessToken,
      client: {
        name: client.name,
        referenceNumber: client.referenceNumber,
        pdfOriginalName: client.pdfOriginalName,
        documents: client.documents || [],
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/portal/document?action=view|download
// Header: Authorization: Bearer <accessToken>
// Streams the PDF to the client (view in browser or force download)
// ─────────────────────────────────────────────────────────────────────────────
router.get("/document", async (req, res) => {
  try {
    const jwt = require("jsonwebtoken");
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized." });
    }

    const token = authHeader.split(" ")[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return res.status(401).json({ message: "Access token expired or invalid. Please log in again." });
    }

    if (decoded.role !== "client") {
      return res.status(403).json({ message: "Forbidden." });
    }

    const client = await Client.findOne({ referenceNumber: decoded.ref });
    if (!client) {
      return res.status(404).json({ message: "Client not found." });
    }

    const docId = req.query.docId;
    let filePath = "";
    let filename = "";

    if (docId) {
      const doc = client.documents.find(d => d._id.toString() === docId);
      if (!doc || !doc.path || !fs.existsSync(doc.path)) {
        return res.status(404).json({ message: "Document not found." });
      }
      filePath = doc.path;
      filename = doc.originalName || "document.pdf";
    } else {
      if (!client.pdfPath || !fs.existsSync(client.pdfPath)) {
        return res.status(404).json({ message: "Document not found." });
      }
      filePath = client.pdfPath;
      filename = client.pdfOriginalName || "report.pdf";
    }

    const action = req.query.action || "view";

    // Log access
    client.accessLog.push({ action: `${action}_doc_${docId || "legacy"}`, ip: req.ip });
    await client.save();

    res.setHeader("Content-Type", "application/pdf");
    if (action === "download") {
      res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    } else {
      res.setHeader("Content-Disposition", `inline; filename="${filename}"`);
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/portal/access-log/:ref  (Admin only — view access log for a client)
// ─────────────────────────────────────────────────────────────────────────────
router.get("/access-log/:ref", requireAdmin, async (req, res) => {
  try {
    const client = await Client.findOne({ referenceNumber: req.params.ref.toUpperCase() });
    if (!client) return res.status(404).json({ message: "Client not found." });
    res.json({ referenceNumber: client.referenceNumber, name: client.name, log: client.accessLog });
  } catch (err) {
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

module.exports = router;
