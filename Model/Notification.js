const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema({
  modelId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isVisit: {
    type: Boolean,
    default: false,
  },
});
const Notification = mongoose.model("notifications", notificationSchema);
module.exports = Notification;
