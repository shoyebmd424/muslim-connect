import React from "react";
import "./Item.css";
import cartImg from "../../assets/Student/cartImg.png";
import { useNavigate } from "react-router-dom";
import { useGetAuthByIdQuery } from "../../ApiService/AuthSlice/AuthSlice";
import { server } from "../../ApiService/Axios";
import { FaStar } from "react-icons/fa6";
import { useGetAllReviewByGigIdQuery } from "../../ApiService/GigsService/GigsService";
const Item = ({ data, index }) => {
  const navigate = useNavigate();
  const user = useGetAuthByIdQuery(data?.userId);
  const reviews = useGetAllReviewByGigIdQuery(data?._id);
  const calCulateRating = () => {
    let rating = 0;
    reviews?.data?.forEach((ele) => {
      rating += ele?.rating;
    });
    return Math.ceil(rating / reviews?.data?.length);
  };
  return (
    <div
      key={index}
      onClick={() => navigate("/student/gigsview", { state: data })}
      className="card item"
      style={{ borderRadius: "15px", width: "45%", cursor: "pointer" }}
    >
      <div class="cart-item">
        {(!data?.gigsImages || !data?.gigsImages[0]?.file) && (
          <img src={cartImg} alt="Product Images" />
        )}
        {data?.gigsImages && data?.gigsImages[0]?.file && (
          <img src={server + data?.gigsImages[0]?.file} alt="Product Images" />
        )}
        <div class="cart-item-info">
          <div style={{ marginTop: "15px" }}>
            <img
              src={server + user?.data?.profile}
              className="profileImg"
              alt=""
              style={{ marginRight: "20px" }}
            />
            <p
              className="cart-item-price"
              style={{ fontSize: "14px", marginLeft: "-180px" }}
            >
              {user?.data?.firstname} {user?.data?.lastname}
            </p>
            <p class="cart-item-price">${data?.price}</p>
          </div>

          <p className="itemDesc">{data?.title}</p>
          <div className="rating  d-flex gap-2 align-items-center flex-start justify-content-start">
            <FaStar size={25} />
            <span className="fw-bold fs-5">{calCulateRating() || 0}</span>
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
