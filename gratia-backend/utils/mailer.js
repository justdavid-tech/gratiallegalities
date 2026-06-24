const nodemailer = require("nodemailer");

// Creates a reusable transporter using Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NOTIFY_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// ── Notify admin when a client sends a message ────────────────────────────
const notifyAdminNewMessage = async ({ clientName, referenceNumber, message }) => {
  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Gratiacorporateconsult" <${process.env.NOTIFY_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New message from ${clientName} (${referenceNumber})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          <div style="background: #0A1628; padding: 24px 32px;">
            <h2 style="color: #C9A84C; margin: 0; font-size: 22px; letter-spacing: 1px;">Gratiacorporateconsult</h2>
            <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Client Message Notification</p>
          </div>
          <div style="padding: 32px;">
            <p style="color: #1F2937; font-size: 15px; margin: 0 0 16px;">You have received a new message from a client on the secure portal.</p>
            <div style="background: #fff; border: 1px solid #e5e7eb; border-left: 4px solid #C9A84C; border-radius: 4px; padding: 20px; margin-bottom: 24px;">
              <p style="margin: 0 0 8px; font-size: 12px; color: #9CA3AF; text-transform: uppercase; letter-spacing: 1px;">From</p>
              <p style="margin: 0 0 16px; font-size: 15px; font-weight: 600; color: #0A1628;">${clientName} &nbsp;·&nbsp; <span style="font-family: monospace; color: #C9A84C;">${referenceNumber}</span></p>
              <p style="margin: 0 0 8px; font-size: 12px; color: #9CA3AF; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 0; font-size: 15px; color: #1F2937; line-height: 1.6;">"${message}"</p>
            </div>
            <a href="${process.env.FRONTEND_URL}/admin" style="display: inline-block; background: #C9A84C; color: #0A1628; padding: 12px 28px; border-radius: 4px; text-decoration: none; font-weight: 700; font-size: 14px; letter-spacing: 1px;">Reply in Dashboard</a>
          </div>
          <div style="background: #f3f4f6; padding: 16px 32px; text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #9CA3AF;">This is an automated notification from OmniPortal. Do not reply to this email.</p>
          </div>
        </div>
      `,
    });
    console.log(`Email notification sent for ${referenceNumber}`);
  } catch (err) {
    // Log but don't crash the server if email fails
    console.error("Email notification failed:", err.message);
  }
};

// ── Notify client when admin replies ────────────────────────────────────────
const notifyClientReply = async ({ clientName, referenceNumber, message }) => {
  // Optional: if you collect client emails in future, notify them here
  // For now just log
  console.log(`Admin replied to ${clientName} (${referenceNumber})`);
};

module.exports = { notifyAdminNewMessage, notifyClientReply };