const { getAllGigsByUserId } = require("../Controller/GigsController");
const {
  CreateReview,
  updateReview,
  deleteReview,
  getOneReview,
  getAllReviews,
  getAllReviewByGigId,
  getAllReviewByUserId,
} = require("../Controller/GigsReviewController");

const reviewRoute = require("express").Router();

reviewRoute.post("/", CreateReview);
reviewRoute.put("/:id", updateReview);
reviewRoute.delete("/:id", deleteReview);
reviewRoute.get("/:id", getOneReview);
reviewRoute.get("/", getAllReviews);
reviewRoute.get("/user/:id", getAllReviewByUserId);
reviewRoute.get("/gig/:id", getAllReviewByGigId);

module.exports = reviewRoute;
