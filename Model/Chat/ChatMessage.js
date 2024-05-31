const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
      required: true,
    },
    senderId: {
      type: String,
      required: true,
    },
    message: String,
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("messages", MessageSchema);

module.exports = MessageModel;
