import React, { useState } from "react";
import "./Review.css";
import { StarRatingDiv } from "./StyleStar";
import { toast } from "react-toastify";
import { BsX } from "react-icons/bs";
import { useCreateRiviewMutation } from "../../ApiService/GigsService/GigsService";
import { useAuth } from "../../context/AuthContext";
const Review = ({ closeReview, gigId, sessionId }) => {
  const [review, setReview] = useState(null);
  const [{ user }] = useAuth();
  const [createRiview, { isError, error, isSuccess }] =
    useCreateRiviewMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };
  console.log(gigId, sessionId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    review.gigId = gigId;
    review.sessionId = sessionId;
    review.userId = user?._id;
    try {
      const { data } = await createRiview(review);
      console.log(data);
      console.log(error);
      if (isError) {
        toast.error(error?.data?.message || error?.data);
        return;
      }
      if (isSuccess) {
        toast.success("Thank you so much for give me rating");
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "something went wrong");
    }
  };
  return (
    <div className="review-container d-flex flex-column">
      <div className="col-md-6 m-auto bg-white rounded p-3">
        <div className="text-end">
          <BsX onClick={() => closeReview(false)} size={40} />
        </div>
        <h3 className="text-center text-capitalize">
          Give rating for better reach
        </h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="text-center my-2">
            <StarRating review={review} setReview={setReview} />
          </div>
          <textarea
            className="w-100 rounded border border-2 p-2"
            name="message"
            rows={4}
            onChange={handleChange}
            id=""
            placeholder="Enter message"
          ></textarea>
          <div className="text-center my-2">
            <button className="review-btn fw-semibold">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;

export function StarRating({ review, setReview }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const handleRating = (ratingValue) => {
    setRating(ratingValue);
    setReview({ ...review, rating: ratingValue });
  };

  return (
    <StarRatingDiv>
      {[...Array(5)].map((Star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRating(ratingValue)}
            />
            <star
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className={
                ratingValue <= (hover || rating) ? "activeStar" : "star"
              }
            ></star>
          </label>
        );
      })}
    </StarRatingDiv>
  );
}
