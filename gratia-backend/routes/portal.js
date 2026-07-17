const express = require("express");
const router = express.Router();
const axios = require("axios");

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
      client.accessLog.push({ action: "failed_login", ip: req.ip });
      await client.save();
      return res.status(401).json({ message: "Invalid reference number or password." });
    }

    client.accessLog.push({ action: "login", ip: req.ip });
    await client.save();

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
// GET /api/portal/document?action=view|download&docId=optional
// Header: Authorization: Bearer <accessToken>
// Fetches the PDF from Cloudinary and streams it to the client
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
    let fileUrl = "";
    let filename = "";

    if (docId) {
      const doc = client.documents && client.documents.find(d => d._id.toString() === docId);
      if (!doc || !doc.path) {
        return res.status(404).json({ message: "Document not found." });
      }
      fileUrl = doc.path;
      filename = doc.originalName || "document.pdf";
    } else {
      if (!client.pdfPath) {
        return res.status(404).json({ message: "Document not found." });
      }
      fileUrl = client.pdfPath;
      filename = client.pdfOriginalName || "report.pdf";
    }

    console.log("DOCUMENT REQUEST:", decoded.ref, "docId:", docId, "fileUrl:", fileUrl);

    const action = req.query.action || "view";

    client.accessLog.push({ action: `${action}_doc_${docId || "main"}`, ip: req.ip });
    await client.save();

    if (!fileUrl.startsWith("http://") && !fileUrl.startsWith("https://")) {
      return res.status(410).json({ message: "This document is no longer available. Please contact your business lawyer." });
    }

    const response = await axios.get(fileUrl, { responseType: "stream" });

    res.setHeader("Content-Type", "application/pdf");
    if (action === "download") {
      res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    } else {
      res.setHeader("Content-Disposition", `inline; filename="${filename}"`);
    }

    response.data.pipe(res);

  } catch (err) {
    console.error("Document fetch error:", err.message);
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/portal/access-log/:ref  (Admin only)
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