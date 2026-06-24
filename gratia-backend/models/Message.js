const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    referenceNumber: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      index: true,
    },
    sender: {
      type: String,
      enum: ["client", "admin"],
      required: true,
    },
    content: {
      type: String,
      required: [true, "Message content is required"],
      trim: true,
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
    readByAdmin: {
      type: Boolean,
      default: false,
    },
    readByClient: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);