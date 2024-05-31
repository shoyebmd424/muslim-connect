import React from "react";
import "./Learning.css";
import learningImg from "../../../assets/Student/learningImg.png";
import profileImg from "../../../assets/Student/Ellipse 21.png";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { useGetGigsByIdQuery } from "../../../ApiService/GigsService/GigsService";
import { server } from "../../../ApiService/Axios";
const Learning = ({ value, index }) => {
  const user = useGetAuthByIdQuery(value?.consultantId);
  const gig = useGetGigsByIdQuery(value?.gigId);
  console.log(value?.consultantId);

  return (
    <div key={index} className="card cus">
      {gig?.data?.gigsImages && (
        <img
          src={server + gig?.data?.gigsImages[0]?.file}
          className="lcart"
          alt="l cart"
        />
      )}
      <img
        src={server + user?.data?.profile}
        className="profileImg"
        alt="profile"
      />
      <p style={{ fontWeight: "bold", marginLeft: "-85px" }}>
        {user?.data?.firstname} {user?.data?.lastname}
      </p>
      <div>
        <p>Price</p>
        <p style={{ fontWeight: "bold" }}>${gig?.data?.price}</p>
      </div>
      <div>
        <p>Schedule on</p>
        <p style={{ fontWeight: "bold" }}>{value?.date}</p>
      </div>
      <div>
        <p>Status</p>
        <div className="cbtn sbtn">{gig?.data?.status || "Progress"}</div>
      </div>
    </div>
  );
};
export default Learning;
