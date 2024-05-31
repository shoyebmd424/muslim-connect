import React from "react";

const ContentOverview = () => {
  return (
    <div className="card flex-column gap-3 h-100 p-5">
      <div>
        <h3 className="">Criteria of Levels</h3>
        <small className="text-muted">
          Levels are assigned on the basis of these Points
        </small>
      </div>
      <li className="navbar-active">
        <strong>New</strong> up to 5 sessions completed sessions completed
      </li>
      <li className="navbar-active">
        <strong> Engaged</strong> between 6 and 50 sessions completed
      </li>
      <li className="navbar-active">
        <strong> Premium</strong> between 51 and 100 sessions completed
      </li>

      <li className="navbar-active">
        <strong> Expert</strong> from 101 sessions completed
      </li>

      <li className="navbar-active">
        <strong> Mentor</strong> after one year on the platform and more than
        200 sessions completed, including 10 offered for Allah with a global
        rating of at least 4.5/5.
      </li>
    </div>
  );
};

export default ContentOverview;
