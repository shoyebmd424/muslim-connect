import React from "react";
import "./BookConsultant.css";
import ProfileAndPrice from "../../ProfileAndPrice/ProfileAndPrice";
import SubNav from "../../SubNav/SubNav";
import Tabs from "../../Tabs/Tabs";
import Avatar from "../../../assets/GigsView/Avatar.png";
import Time2 from "../../../assets/GigsView/Time2";
import Tick from "../../../assets/GigsView/Tick";
import Time1 from "../../../assets/GigsView/Time";
import Calender from "../../../assets/GigsView/Calender";
import PaymentCard from "../../PaymentCard/PaymentCard";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { useLocation } from "react-router-dom";
import { DatePicker } from "rsuite";
import { FaClock } from "react-icons/fa6";

function BookConsultant() {
  let arr = ["Learning", "Consultation", "Book Consultation"];
  const { state } = useLocation();
  const user = useGetAuthByIdQuery(state?.userId);
  return (
    <div>
      {/* <DashNav navData={navData} /> */}
      <SubNav />
      <div
        style={{
          marginTop: "10%",
          padding: "3% 5% 3% 5%",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "65%",
            padding: "0 5% 0 5%",
          }}
        >
          <Tabs arr={arr} />
          <h2
            style={{
              fontWeight: "500",
              fontSize: "26px",
              lineHeight: "42px",
              marginTop: "20px",
            }}
          >
            {state?.title}
          </h2>
          <ProfileAndPrice
            img={Avatar}
            name={user?.data?.firstname + " " + user?.data?.lastname}
            star={"5.0"}
            people="28"
            price={"$" + state?.price}
          />
          <BenefitsCard gig={state} />
        </div>
        <div style={{ width: "35%" }}>
          <PaymentCard
            gig={state}
            head={"Consultation"}
            btn={"Pay Now"}
            url="/student/payment"
          />
        </div>
      </div>
    </div>
  );
}

export default BookConsultant;

export const PaymentCardBody = ({ details, setDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: e.target?.value ? value : e });
  };

  return (
    <>
      {/* date  */}
      <div className="w-100">
        <label
          htmlFor=""
          style={{ display: "block", fontWeight: "500", fontSize: "18px" }}
        >
          Date
        </label>
        <DatePicker
          onChange={(value, e) => setDetails({ ...details, date: value })}
          value={details?.date}
          className="w-100"
          format="dd.MM.yyyy"
        />
        <span
          style={{
            fontWeight: "400",
            fontSize: "12px",
            color: "rgba(71, 84, 103, 1)",
          }}
        >
          Select the Date for Consultation
        </span>
      </div>
      {/* time  */}
      <div className="w-100">
        <label
          htmlFor=""
          style={{ display: "block", fontWeight: "500", fontSize: "18px" }}
        >
          Time
        </label>

        <div
          className="w-100"
          style={{
            fontWeight: "400",
            fontSize: "14px",
            color: "rgba(102, 112, 133, 1)",
          }}
        >
          <DatePicker
            name="time"
            onChange={(value, e) => setDetails({ ...details, time: value })}
            value={details?.time}
            className="w-100"
            format="HH:mm:ss"
            caretAs={FaClock}
          />
        </div>
        <span
          style={{
            fontWeight: "400",
            fontSize: "12px",
            color: "rgba(71, 84, 103, 1)",
          }}
        >
          Select the Time for Consultation
        </span>
      </div>

      {/* duration  */}
      <div>
        <label
          htmlFor=""
          style={{ display: "block", fontWeight: "500", fontSize: "18px" }}
        >
          Duration
        </label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: " 1px solid rgba(208, 213, 221, 1)",
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            padding: "10px 14px 10px 14px",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          {/* <span
            style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "rgba(102, 112, 133, 1)",
            }}
          >
            Select Duration
          </span>
          <Calender /> */}
          <select
            name="duration"
            onChange={handleChange}
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              outline: "none",
              fontWeight: "400",
              fontSize: "14px",
              color: "rgba(102, 112, 133, 1)",
            }}
          >
            <option value="30">30 mins</option>
            <option value="60">1 hour</option>
            <option value="120">2 hour</option>
          </select>
        </div>
        <span
          style={{
            fontWeight: "400",
            fontSize: "12px",
            color: "rgba(71, 84, 103, 1)",
          }}
        >
          Select the Duration for Consultation
        </span>
      </div>
    </>
  );
};

const BenefitsCard = ({ gig }) => {
  return (
    <div
      style={{
        marginTop: "30px",
        boxShadow: " 0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        padding: "8%",
      }}
    >
      <p style={{ fontWeight: "400", fontSize: "20px" }}>
        {" "}
        Save up to 20% with{" "}
        <span className="subcribe_save" style={{ fontWeight: "600" }}>
          Subscribe to save
        </span>
      </p>
      <ul className="ul" style={{ listStyleType: "none" }}>
        <li>
          <Tick /> Apprentissage religieux individuel
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
        <h5 style={{ fontWeight: "600", fontSize: "18px" }}>Availability</h5>
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
      <div dangerouslySetInnerHTML={{ __html: gig?.content }} />
    </div>
  );
};
