import React from "react";
import ArrowSvg from "../../assets/PriceCard/ArrowSvg";
import BulletPoint from "../../assets/PriceCard/BulletPoint";

function PriceCard({ n, pm, py, list }) {
  return (
    <div
      style={{
        width: "680px",
        borderRadius: "18px",
        color: "white",
        background: "linear-gradient(180deg, #7C5399 0%, #291C33 100%)",
        padding: "50px 100px 50px 100px",
        boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h3 style={{ fontWeight: "500", fontSize: "2.3rem" }}>{n}</h3>
      <div style={{ marginTop: "10px", marginBottom: "15px" }}>
        <span style={{ fontWeight: "600", fontSize: "2.5rem" }}>
          ${pm}{" "}
          <span
            style={{ fontSize: "1rem", fontWeight: "500", color: "#D1D1D1" }}
          >
            /MONTH
          </span>{" "}
        </span>{" "}
        <span
          style={{
            fontWeight: "400",
            fontSize: "1.8rem",
            opacity: "70%",
            margin: "20px",
          }}
        >
          or
        </span>
        <span style={{ fontWeight: "600", fontSize: "2.5rem" }}>
          ${py}{" "}
          <span
            style={{ fontSize: "1rem", fontWeight: "500", color: "#D1D1D1" }}
          >
            /YEAR
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
              <BulletPoint />{" "}
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "1.1rem",
                  marginLeft: "10px",
                }}
              >
                {e}
              </span>
            </li>
          ))}
        </ul>
        <button
          style={{
            display: "flex",
            backgroundColor: "transparent",
            border: "1px solid white",
            borderRadius: "8px",
            color: "white",
            padding: "15px 50px 15px 50px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          Get Started <ArrowSvg />{" "}
        </button>
      </div>
    </div>
  );
}

export default PriceCard;
