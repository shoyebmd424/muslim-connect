import React from "react";
import Tick from "../../../assets/GigsView/Tick";
import Time1 from "../../../assets/GigsView/Time";
import Calender from "../../../assets/GigsView/Calender";
import Time2 from "../../../assets/GigsView/Time2";
import ArrowSvg from "../../../assets/PriceCard/ArrowSvg";
import { useNavigate } from "react-router-dom";

const RightContaineer = ({ gig }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container_main">
        <spam className="topheadder">
          <div
            className={gig?.package === "Premium package" ? "box_1" : "box_2"}
          >
            Paid Service
          </div>
          <div className={gig?.package === "Free package" ? "box_1" : "box_2"}>
            Free service
          </div>
        </spam>
        <div className="box_3">
          <h1 style={{ fontWeight: "600", fontSize: "40px" }}>${gig?.price}</h1>
          <p style={{ fontWeight: "400", fontSize: "20px" }}>
            {" "}
            Save up to 20% with{" "}
            <span className="subcribe_save" style={{ fontWeight: "600" }}>
              Subscribe to save
            </span>
          </p>
          <ul className="ul" style={{ listStyleType: "none" }}>
            <li>
              <Tick /> Apprentissage religieux {gig?.theme}
            </li>
            <li>
              <Tick /> Islam Financial System
            </li>
            <li>
              <Time1 /> {gig?.duration}s Consultation Session
            </li>
          </ul>
          {/* </div> */}
          <div className="availability">
            <h5 style={{ fontWeight: "600", fontSize: "18px" }}>
              Availability
            </h5>
            <div className="box_4">
              <p>
                <Calender />
                <span style={{ fontWeight: "500", fontSize: "12px" }}>
                  Available
                </span>
              </p>
              <p>
                <Time2 />
                <span style={{ fontWeight: "500", fontSize: "12px" }}>
                  {gig?.availability} available
                </span>
              </p>
            </div>
          </div>
          <h5 style={{ fontWeight: "600", fontSize: "18px" }}>In service</h5>
          <p>{gig?.whyService}</p>
          <div className="submit_btn">
            <button
              onClick={() => navigate("/student/book", { state: gig })}
              className="button_book"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Book a Consultation <ArrowSvg />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightContaineer;
