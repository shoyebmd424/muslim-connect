import React from "react";
import MoreSvg from "../../../assets/Gigs/MoreSvg";
import LikeSvg from "../../../assets/GigsView/LikeSvg";
import PlusSvg from "../../../assets/GigsView/PlusSvg";
import ShareSvg from "../../../assets/GigsView/ShareSvg";
import Tabs from "../../Tabs/Tabs";

const Head = () => {
  let arr = ["Learning", "Consultation"];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Tabs arr={arr} />

      <div style={{ display: "flex" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "transparent",
            border: "1px solid rgba(124, 83, 153, 1)",
            padding: "0px 40px 0px 40px",
            color: "rgba(124, 83, 153, 1)",
            borderRadius: "5px",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          <PlusSvg /> Follow
        </button>

        <LikeSvg />
        <ShareSvg />
        <MoreSvg />
      </div>
    </div>
  );
};

export default Head;
