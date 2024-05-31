import React from "react";
import HomeSvg from "../../assets/GigsView/HomeSvg";
import ToArrow from "../../assets/GigsView/ToArrow";

function Tabs({ arr }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <HomeSvg />

        {arr.map((e, i) => {
          if (i === arr.length - 1) {
            return (
              <>
                <ToArrow />
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "rgba(111, 174, 156, 1)",
                  }}
                >
                  {e}
                </span>
              </>
            );
          } else {
            return (
              <>
                <ToArrow />
                <span style={{ fontWeight: "500", fontSize: "18px" }}>{e}</span>
              </>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Tabs;
