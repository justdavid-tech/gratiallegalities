require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const adminRoutes = require("./routes/admin");
const portalRoutes = require("./routes/portal");
const messageRoutes = require("./routes/messages");

const app = express();

// ── Middleware ────────────────────────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:5173",          // local dev (Vite)
  "http://localhost:5174",          // local dev alternate port
  // ↓ When deploying, replace/add your production URL here:
  "https://gratiallegalities.vercel.app",
];

if (process.env.FRONTEND_URL) {
  // Trim any trailing slashes to avoid matching issues
  allowedOrigins.push(process.env.FRONTEND_URL.replace(/\/$/, ""));
}

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (curl, mobile, Postman) or from allowed list
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked for origin: ${origin}`));
    }
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/api/admin", adminRoutes);
app.use("/api/portal", portalRoutes);
app.use("/api/messages", messageRoutes);

// ── Health check ─────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((req, res) => res.status(404).json({ message: "Route not found." }));

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Internal server error." });
});

// ── Connect to MongoDB and start server ───────────────────────────────────────
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
