import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import Slider from "react-slick";

const NextButton = ({ onClick, more }) => {
  return (
    <button
      className="bg-transparent border rounded-circle"
      onClick={onClick}
      style={{
        position: "absolute",
        top: !more ? "70%" : "75%",
        right: "20px",
        zIndex: 1,
        color: "white",
        cursor: "pointer",
      }}
    >
      <FaArrowRight size={30} />
    </button>
  );
};

const PrevButton = ({ onClick, more }) => {
  return (
    <button
      className="bg-transparent border rounded-circle"
      onClick={onClick}
      style={{
        position: "absolute",
        top: more ? "83%" : "77.5%",
        left: "80%",
        transform: "translateY(-50%)",
        zIndex: 1,
        border: "none",
        cursor: "pointer",
      }}
    >
      <FaArrowLeft size={30} />
    </button>
  );
};

const StudentSlider = ({ more, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextButton more={more} />,
    prevArrow: <PrevButton more={more} />,
  };

  return (
    <div className={`h-100  w-100 d-flex flex-column  `}>
      <Slider {...settings} className="mt-auto">
        {data.map((item, index) => (
          <div className={`said slide ${!more ? "mb-5" : ""}`} key={index}>
            <p>
              “As a devout follower seeking religious guidance and knowledge, I
              couldn't be more pleased with my experience on Muslim Connect.
              This platform has truly revolutionized the way I connect with
              religious experts!”
            </p>
            <div className="d-flex justify-content-between alumani-name">
              <div>Ayesha Siddiqa</div>
              <div className="d-flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="d-flex justify-content-between alumani-location">
              <small className="text-light">
                Newly Converted Muslim, Indonesian
              </small>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentSlider;
