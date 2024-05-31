import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ConsultantSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
    { id: 5, content: "Card 5" },
    { id: 6, content: "Card 6" },
  ];

  return (
    <>
      <div className="h-100 w-100   overflow-hidden">
        <div className="h-100 d-flex flex-column  ">
          <Slider ref={sliderRef} {...settings} className="mt-auto ">
            {cards.map((card) => (
              <div key={card.id} className="slider-card px-3  text-white">
                <Card />
              </div>
            ))}
          </Slider>
          <div
            className="d-flex justify-content-end text-white gap-4 mb-3"
            style={{ fontWeight: "lighter" }}
          >
            <div
              onClick={() => sliderRef.current.slickPrev()}
              className="p-2 border rounded-circle"
              style={{ cursor: "pointer" }}
            >
              <FaArrowLeft size={30} />
            </div>
            <div
              onClick={() => sliderRef.current.slickNext()}
              className="p-2 border rounded-circle"
              style={{ cursor: "pointer" }}
            >
              <FaArrowRight size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultantSlider;

const Card = () => {
  return (
    <>
      <p>
        “As a consultant on Muslim Connect, I have had the privilege of
        connecting with individuals seeking guidance and knowledge in various
        aspects of Islamic life. I can confidently say that this platform has
        been instrumental in expanding my reach and impact as a religious
        expert.”
      </p>
      <div className="">
        <h3 className="fw-bold">Md Useman</h3>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <span className="fw-bold">Finance consultant</span>
          <small className="text-light">Indonesian</small>
        </div>{" "}
      </div>
    </>
  );
};
