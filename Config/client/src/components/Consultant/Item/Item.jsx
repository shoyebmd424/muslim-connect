import React from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { server } from "../../../ApiService/Axios";
import { FaStar } from "react-icons/fa6";
import { useGetAllReviewByGigIdQuery } from "../../../ApiService/GigsService/GigsService";
const Item = ({ gig }) => {
  const navigate = useNavigate();
  const { data } = useGetAuthByIdQuery(gig?.userId);
  const reviews = useGetAllReviewByGigIdQuery(gig?._id);
  const calculateRating = () => {
    let rating = 0;
    reviews.data?.forEach((ele) => {
      rating += ele?.rating;
    });
    return Math.ceil(rating / reviews?.data?.length);
  };
  return (
    <div
      onClick={() => navigate("/consultant/gigsview")}
      className="card item"
      style={{ borderRadius: "15px", width: "45%", cursor: "pointer" }}
    >
      <div class="cart-item">
        {gig?.gigsImages[0]?.file && (
          <img src={server + gig?.gigsImages[0]?.file} alt="Product Images" />
        )}
        <div class="cart-item-info mt-auto">
          <div style={{ marginTop: "15px" }}>
            <img
              src={server + data?.profile}
              className="profileImg"
              alt=""
              style={{ marginRight: "20px" }}
            />
            <p
              className="cart-item-price text-capitalize"
              style={{ fontSize: "14px", marginLeft: "-180px" }}
            >
              {data?.firstname} {data?.lastname}
            </p>
            <p class="cart-item-price">${gig?.price}</p>
          </div>

          <p className="itemDesc mt-2">{gig?.title}</p>
          <div className="rating d-flex gap-2 justify-content-start">
            <FaStar size={25} /> <span>{calculateRating() || 0}</span>
            <span className="rating-count">
              ({reviews?.data?.length} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
