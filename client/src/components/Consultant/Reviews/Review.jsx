import React, { useEffect, useState } from "react";
import "./Review.css";
import { MdStar } from "react-icons/md";
import Rev from "./Rev";
import { useGetAllReviewByGigIdQuery } from "../../../ApiService/GigsService/GigsService";
import { useAuth } from "../../../context/AuthContext";

const Review = ({ gigs }) => {
  const [totalReview, setTotalReview] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  return (
    <div className="consult-review">
      <h4 className="fw-bold mb-3">Reviews & Ratings</h4>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="consult-review-head">
          {totalReview || 0} reviews for this Gig
        </h5>
        <span className="d-flex align-items-center gap-2">
          {Array.from({ length: Math.ceil(totalRating / totalReview) }).map(
            (_, key) => (
              <MdStar size={25} key={key} />
            )
          )}
          <span className="p fw-bold">
            {Math.ceil(totalRating / totalReview) || 0.0}
          </span>
        </span>
      </div>
      <div className="consult-reviews">
        {gigs?.map((val, index) => (
          <GigReview
            gig={val}
            index={index}
            setTotalRating={setTotalRating}
            setTotalReview={setTotalReview}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;

const GigReview = ({ gig, index, setTotalRating, setTotalReview }) => {
  const reviews = useGetAllReviewByGigIdQuery(gig?._id);
  console.log(setTotalRating, setTotalReview);
  const [{ user }] = useAuth();
  useEffect(() => {
    const Calculate = () => {
      let rat = 0;
      reviews?.data?.forEach((ele) => {
        rat += ele?.rating;
      });
      return rat;
    };
    setTotalReview((pre) => pre + (reviews?.data?.length || 0));
    setTotalRating((pre) => pre + Calculate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviews?.data]);
  return (
    <>
      {reviews?.data?.map(
        (val, index) =>
          val?.userId !== user?._id && (
            <>
              <hr />
              <Rev review={val} />
            </>
          )
      )}
    </>
  );
};
