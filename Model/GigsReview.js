const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    gigId: { type: mongoose.Types.ObjectId, ref: "gigs" },
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    sessionId: { type: mongoose.Types.ObjectId, ref: "session" },
    message: String,
    rating: Number,
  },
  { timestamps: true }
);
const GigsReview = mongoose.model("gig-review", reviewSchema);

module.exports = GigsReview;
