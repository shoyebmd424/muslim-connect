import React from "react";
import PriceCard from "../../PriceCard/PriceCard";
import BulletPoint from "../../../assets/PriceCard/BulletPoint";
import "./Subscription.css";
import CrossSvg from "../../../assets/Subscription/CrossSvg";

function Subscription() {
  return (
    <div>
      {/* <DashNav navData={navData} /> */}

      <div
        style={{
          padding: "15%",
          background: "linear-gradient(180deg, #7C5399 0%, #291C33 100%)",
          height: "90vh",
          color: "white",
        }}
      >
        <h1
          style={{ fontWeight: "700", fontSize: "60px", textAlign: "center" }}
        >
          Choose Your Path to <br /> Knowledge and Guidance
        </h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "28px",
            textAlign: "center",
            color: "#cccccc",
            marginTop: "20px",
          }}
        >
          Select the Perfect Subscription Plan for You. Only $5.90/month <br />{" "}
          after. Cancel anytime.
        </p>

        <div
          className="subscription_btn"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button>Try Free fot 1 Month</button>
          <button
            style={{ backgroundColor: "rgba(124, 83, 153, 1)", border: "none" }}
          >
            Explore Plans
          </button>
        </div>

        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            textAlign: "center",
            color: "#cccccc",
            margin: "10px",
          }}
        >
          Free for 1 month, then $5.90 per month after. Offer only available if
          you haven't <br /> tried Premium before. Terms apply.
        </p>
      </div>

      <h1 style={{ textAlign: "center", marginTop: "5%" }}>
        Subscription Plans
      </h1>
      <div className="subscription_plan_card">
        <div style={{}}>
          <FreePriceCard n={"Free Plan"} pm={"0.00"} list={freeList} />
        </div>
        <div style={{ marginLeft: "-90px" }}>
          <PriceCard n={"Premium Plan"} pm={"5.90"} py={"50.00"} list={list} />
        </div>
      </div>
    </div>
  );
}

export default Subscription;

let list = [
  "Consult with the best Consultants",
  "One free month Subscription after verification",
  "Benefit from 10% commissions on transactions instead of 20% ",
  "Benefit from priority assistance and personalized help from our team. ",
  "Save $20.70 on yearly plan",
];

let freeList = [
  {
    data: "Consult with the best Consultants",
    availability: true,
  },
  {
    data: "One free month Subscription after verification",
    availability: true,
  },
  {
    data: "Benefit from 10% commissions on transactions instead of 20% ",
    availability: false,
  },
  {
    data: "Benefit from priority assistance and personalized help from our team. ",
    availability: false,
  },
];

function FreePriceCard({ n, pm, list }) {
  return (
    <div
      style={{
        width: "680px",
        borderRadius: "18px",
        background: "transparent",
        padding: "50px 100px 50px 100px",
        boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 30px 10px 30px",
          backgroundColor: "rgba(111, 174, 156, 1)",
          marginLeft: "-100px",
          marginTop: "-10px",
          marginBottom: "30px",
          width: "45%",
        }}
      >
        <span
          style={{ fontWeight: "500", fontSize: "16px", marginLeft: "10px" }}
        >
          Free For 1 Month
        </span>
      </div>
      <h3 style={{ fontWeight: "500", fontSize: "2.3rem" }}>{n}</h3>
      <div style={{ marginTop: "10px", marginBottom: "15px" }}>
        <span style={{ fontWeight: "600", fontSize: "2.5rem" }}>
          ${pm}{" "}
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "500",
              color: "rgba(123, 123, 123, 1)",
            }}
          >
            /MONTH
          </span>{" "}
        </span>{" "}
      </div>
      <div>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          {list.map((e, i) => (
            <li
              style={{
                display: "flex",
                marginBottom: "19px",
                alignItems: "center",
              }}
              key={i}
            >
              {e.availability ? (
                <>
                  <BulletPoint />
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "1.1rem",
                      marginLeft: "10px",
                    }}
                  >
                    {e.data}
                  </span>
                </>
              ) : (
                <>
                  <CrossSvg />
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "1.1rem",
                      marginLeft: "10px",
                    }}
                  >
                    {e.data}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
