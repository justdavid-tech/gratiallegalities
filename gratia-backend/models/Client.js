const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Client name is required"],
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    referenceNumber: {
      type: String,
      required: [true, "Reference number is required"],
      unique: true,
      trim: true,
      uppercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 4,
    },
    status: {
      type: String,
      enum: ["active", "pending", "expired"],
      default: "pending",
    },
    pdfPath: {
      type: String,
      default: null,
    },
    pdfOriginalName: {
      type: String,
      default: null,
    },
    documents: [
      {
        path: { type: String, required: true },
        originalName: { type: String, required: true },
        uploadedAt: { type: Date, default: Date.now },
      }
    ],
    accessLog: [
      {
        action: { type: String }, // "view" | "download" | "login"
        ip: { type: String },
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// Hash password before saving
clientSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

// Compare plain password to hashed
clientSchema.methods.verifyPassword = async function (plainPassword) {
  return bcrypt.compare(plainPassword, this.password);
};

// Never return password in JSON responses
clientSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model("Client", clientSchema);
