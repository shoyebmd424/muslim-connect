import React from "react";
import { MdStar } from "react-icons/md";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { server } from "../../../ApiService/Axios";
const Rev = ({ review }) => {
  const { data } = useGetAuthByIdQuery(review?.userId);
  return (
    <>
      <div className="review">
        <div className="d-flex gap-4 ">
          <div
            style={{ width: "50px", aspectRatio: "1" }}
            className="d-flex align-items-center mb-auto my-2"
          >
            <img
              src={server + data?.profile}
              alt="profile"
              className="w-100 h-100 rounded-circle "
            />
          </div>
          <div>
            <h5>
              {data?.firstname} {data?.lastname}
            </h5>
            <div className="d-flex  align-items-center">
              <span className="d-flex align-items-center">
                {Array.from({ length: review?.rating }).map((_, key) => (
                  <MdStar size={25} key={key} />
                ))}
              </span>
              <div className="d-flex gap-2 align-items-center">
                <span className="fw-semibold fs-5">{review?.rating}</span>{" "}
                <span className="fs-bold">|</span>
                <span className="text-muted">
                  {new Date(review?.createdAt).toLocaleTimeString()}
                </span>
              </div>
            </div>
            <div className="my-3" style={{ fontSize: "15px" }}>
              {review?.message}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rev;
