import React from "react";
import "./LevelOverview.css";
import LevelProfile from "./LevelProfile";
import ContentOverview from "./ContentOverview";
const LevelOverview = () => {
  return (
    <div className="level-overview position-relative">
      <div className="level-overview-head">
        <div className="container">
          <h2 className="fw-semibold text-white py-5">Level Overview</h2>
        </div>
      </div>
      <div className="container level-overview-content pb-5">
        <div className="row">
          <div className="profile-overview col-4">
            <LevelProfile />
          </div>
          <div className="overview-content col-8 px-5">
            <ContentOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelOverview;
