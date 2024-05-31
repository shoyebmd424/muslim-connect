const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
  title: {
    type: String,
    required: true,
  },

  theme: String,
  level: String,
  keyword: Array,
  // service
  package: String,
  whyService: String,
  availablity: String,
  selectRange: String,
  serviceType: Number,
  price: String,
  duration: String,
  // free
  freePackege: {},
  addOns: {},
  // content
  description: String,
  // media
  gigimages: Array,
  gigVideo: String,
  status: String,
  //   actions
  impression: Number,
  clicks: Number,
  Orders: Number,
  cancelations: Number,
});

const Course = mongoose.model("course", courseSchema);
module.exports = Course;
