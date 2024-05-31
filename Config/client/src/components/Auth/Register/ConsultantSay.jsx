import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import consultantImg from "../../../assets/auth/login.jpeg";
import Slider from "react-slick";
import ConsultantSlider from "./ConsultantSlider";

const ConsultantSay = ({ more }) => {
  return (
    <>
      <div
        style={{ height: more ? "" : "90vh", zIndex: "1" }}
        className={`w-100 position-relative ${more ? "h-100" : ""}`}
      >
        <img
          src={consultantImg}
          className={`consultant-img w-100 h-100 `}
          alt="register"
        />
        <div
          className="position-absolute consult-layer d-flex  "
          style={{ inset: "0" }}
        >
          <ConsultantSlider />
          {/* <div
            className={`slide consult-said d-flex flex-column  mt-auto 
          }  `}
            style={{ marginTop: !more ? "160px" : "" }}
          ></div> */}
        </div>
      </div>
    </>
  );
};

export default ConsultantSay;

const data = [
  {
    message:
      "As a consultant on Muslim Connect, I have had the privilege of connecting with individuals seeking guidance and knowledge in various aspects of Islamic life. I can confidently say that this platform has been instrumental in expanding my reach and impact as a religious expert.",
    name: "Md Useman",
    designation: "Finance consultant",
    location: "Indonesian",
  },
  {
    message:
      "As a consultant on Muslim Connect, I have had the privilege of connecting with individuals seeking guidance and knowledge in various aspects of Islamic life. I can confidently say that this platform has been instrumental in expanding my reach and impact as a religious expert.",
    name: "Md Useman",
    designation: "Finance consultant",
    location: "Indonesian",
  },
  {
    message:
      "As a consultant on Muslim Connect, I have had the privilege of connecting with individuals seeking guidance and knowledge in various aspects of Islamic life. I can confidently say that this platform has been instrumental in expanding my reach and impact as a religious expert.",
    name: "Md Useman",
    designation: "Finance consultant",
    location: "Indonesian",
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      {/* Add your custom next button design here */}
      <i className="fas fa-arrow-right"></i> {/* Example using FontAwesome */}
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      {/* Add your custom prev button design here */}
      <i className="fas fa-arrow-left"></i> {/* Example using FontAwesome */}
    </div>
  );
};
