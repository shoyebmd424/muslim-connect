const mongoose = require("mongoose");
const GigsSchema = new mongoose.Schema({
  // them
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
  title: {
    type: String,
    required: true,
  },

  theme: String,
  level: String,
  keyword: Array,
  content: String,
  collective: String,
  availability: String,
  // service
  package: String,
  whyService: String,
  availablity: String,
  dateRange: String,
  serviceType: String,
  price: String,
  duration: String,
  // package
  freeDateRange: String,
  platform: String,
  extraDuration: String,
  extraPrice: String,
  // content
  description: String,
  // media
  gigsImages: Array,
  status: String,
  //   actions
  impression: Number,
  clicks: Number,
  Orders: Number,
  cancelations: Number,
  // rating
  rating: Array,
  // session
  sessionId: Array,
  status: String,
});

const Gigs = mongoose.model("Gigs", GigsSchema);

module.exports = Gigs;
