import React from "react";
import StarSvg from "../../assets/GigsView/StarSvg";
function ProfileAndPrice({ img, name, star, people, price }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={img}
          alt="img"
          style={{ height: "75px", width: "75px", borderRadius: "50%" }}
        />
        <div style={{ marginLeft: "20px" }}>
          <span style={{ fontWeight: "600", fontSize: "24px" }}>{name}</span>
          <div style={{ display: "flex" }}>
            <StarSvg />
            <span
              style={{
                fontWeight: "600",
                fontSize: "15px",
                marginLeft: "10px",
                marginTop: "3px",
              }}
            >
              {star}
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "15px",
                  color: "rgba(85, 85, 85, 1)",
                }}
              >
                ({people})
              </span>{" "}
            </span>
          </div>
        </div>
      </div>

      <div style={{ fontWeight: "600", fontSize: "42px" }}> {price} </div>
    </div>
  );
}

export default ProfileAndPrice;
