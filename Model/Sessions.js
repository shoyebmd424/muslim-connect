const mongoose = require("mongoose");
const SessionSchema = new mongoose.Schema(
  {
    consultantId: { type: mongoose.Types.ObjectId, ref: "user" },
    studentId: { type: mongoose.Types.ObjectId, ref: "user" },
    gigId: { type: mongoose.Types.ObjectId, ref: "gigs" },
    startTime: String,
    endTime: String,
    duration: String,
    status: String,
    paymentId: String,
  },
  { timestamps: true }
);
const Session = mongoose.model("session", SessionSchema);

module.exports = Session;
