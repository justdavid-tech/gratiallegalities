require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("./models/Admin");

const newPassword = process.argv[2];
const targetEmail = (process.argv[3] || process.env.ADMIN_EMAIL || "gratialegals@gmail.com").toLowerCase();

if (!newPassword) {
  console.log("\n========================================================");
  console.log("  Gratia Legalities - Admin Password Reset Script");
  console.log("========================================================");
  console.log("\nUsage:");
  console.log("  node reset-password.js <new_password> [admin_email]");
  console.log("\nExample:");
  console.log("  node reset-password.js MyNewSecurePass123! gratialegals@gmail.com\n");
  process.exit(1);
}

async function reset() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not found in .env");
    }

    console.log("Connecting to MongoDB database...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected successfully.\n");

    let admin = await Admin.findOne({ email: targetEmail });
    if (admin) {
      admin.password = newPassword; // Mongoose pre-save hook will hash with bcrypt
      await admin.save();
      console.log(`✅ Success: Password for admin '${targetEmail}' has been updated!`);
    } else {
      await Admin.create({ email: targetEmail, password: newPassword });
      console.log(`✅ Success: Created new admin account for '${targetEmail}' with your password!`);
    }

    await mongoose.disconnect();
    console.log("\nYou can now log in at your Admin Portal with your new password.\n");
    process.exit(0);
  } catch (err) {
    console.error("\n❌ Reset failed:", err.message);
    console.error("\nTip: If DNS fails (ENOTFOUND), check your internet connection or run this on Render Console.\n");
    process.exit(1);
  }
}

reset();
