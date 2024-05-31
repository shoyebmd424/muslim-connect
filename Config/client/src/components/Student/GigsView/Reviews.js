import React from "react";
import ProfileImg from "../../../assets/GigsView/Ellipse 22.png";
import { useGetAllReviewByGigIdQuery } from "../../../ApiService/GigsService/GigsService";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { server } from "../../../ApiService/Axios";
import { FaStar } from "react-icons/fa6";

const Reviews = ({ gig }) => {
  const { data, isLoading, isError } = useGetAllReviewByGigIdQuery(gig?._id);
  const calCulateAvg = () => {
    let avgRat = 0;
    if (Array.isArray(data)) {
      data.forEach((ele) => {
        avgRat += ele?.rating;
      });
    }
    return Math.ceil(avgRat / data?.length);
  };
  if (data?.length === 0) {
    return <h3 className="text-center fw-bold"> No Reviews</h3>;
  }

  return (
    <div
      style={{
        width: "65%",
        backgroundColor: "#FFF",
        padding: "3%",
      }}
    >
      <div className="Reviews-title">
        <h1
          style={{
            fontWeight: 600,
            fontSize: "44px",
          }}
        >
          Reviews
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontWeight: 600,
              fontSize: "28px",
            }}
          >
            {data?.length} reveiws from this Gig
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {Array.from({ length: calCulateAvg() || 0 }).map((_, key) => (
              <FaStar size={30} key={key} />
            ))}
            <h1
              style={{
                fontWeight: 600,
                fontSize: "28px",
              }}
            >
              {calCulateAvg()}
            </h1>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
        }}
      >
        {isLoading ? (
          "Loading....."
        ) : isError ? (
          <div className="text-center text-danger"> Fetching error occured</div>
        ) : (
          data?.map((val, index) => <ReviewsPersons val={val} index={index} />)
        )}
        {/* <ReviewsPersons /> */}
      </div>
    </div>
  );
};

export default Reviews;

const ReviewsPersons = ({ val, index }) => {
  const user = useGetAuthByIdQuery(val?.userId);
  return (
    <div
      key={index}
      style={{
        display: "flex",
        alignItems: "start",
        gap: "10px",
        padding: "2rem 0rem 2rem 0rem",
        borderTop: "1px solid gray",
      }}
    >
      <img
        style={{
          width: "80px",
          borderRadius: "50%",
          aspectRatio: 1 / 1,
          // height: '200px'
        }}
        src={server + user?.data?.profile || ProfileImg}
        alt="profile"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 500,
            lineHeight: "24px",
            marginLeft: "10px",
          }}
        >
          {user?.data?.firstname} {user?.data?.lastname}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {Array.from({ length: val?.rating || 0 }).map((_, i) => (
              <FaStar size={20} key={i} />
            ))}
            <h1
              style={{
                fontWeight: 600,
                fontSize: "28px",
                paddingRight: "1rem",
              }}
            >
              {val?.rating}
            </h1>
          </div>
          <p
            style={{
              paddingLeft: "1rem",
              borderLeft: "3px solid #000",
              fontWeight: 400,
              fontSize: "20px",
              color: "gray",
            }}
          >
            {new Date(val?.createdAt).toLocaleTimeString()}
          </p>
        </div>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "28px",
            fontWeight: 500,
          }}
        >
          {val?.message}
        </p>
      </div>
    </div>
  );
};
