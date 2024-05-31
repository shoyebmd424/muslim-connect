import React from "react";
import img from "../../../assets/Nav_assets/studentProfile.jpeg";
import { useAuth } from "../../../context/AuthContext";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { useGetSessionByUserIdQuery } from "../../../ApiService/SessionSlice/SessionSlice";
import {
  getConsultantLevel,
  getNextLevelValue,
} from "../../../utils/Consultant/Level/Level";
const LevelProfile = () => {
  const [{ user }] = useAuth();
  const { data } = useGetAuthByIdQuery(user?._id);
  const sessions = useGetSessionByUserIdQuery(user?._id);
  return (
    <div className="card flex-column text-center justify-content-center gap-3  p-5">
      <div
        className="level-profile-img mx-auto"
        style={{ width: "200px", aspectRatio: "1/1" }}
      >
        <img src={img} alt="profile" className="w-100 h-100 rounded-circle" />
      </div>
      <h5 className="fw-semibold">
        {data?.firstname} {data?.lastname}
      </h5>
      <div>
        <span className="bg-light px-2 p-1 rounded fw-bold">
          {getConsultantLevel(sessions?.data?.length)}
        </span>
      </div>
      <div className="sessions d-flex flex-column align-items-center gap-2">
        <span className="d-flex justify-content-center">
          <span className="navbar-active">Sessions completed: </span>{" "}
          <span className="navbar-active">
            {sessions?.data?.length} Sessions
          </span>
        </span>
        <span>
          {getNextLevelValue(sessions?.data?.length).remain} sessions left to
          reach new {getNextLevelValue(sessions?.data?.length).nextLevel} tier
        </span>
      </div>
      <div className=" w-100 level-progress">
        <div
          className="w-100 border border-2 rounded-4 "
          style={{ height: "8px" }}
        >
          <div
            className=" h-100"
            style={{
              background: "purple",
              width:
                (100 / getNextLevelValue(sessions?.data?.length).totalLevel) *
                  sessions?.data?.length +
                "%",
            }}
          ></div>{" "}
        </div>

        <div
          style={{ fontSize: "13px" }}
          className="d-flex justify-content-between align-items-center"
        >
          <span>{sessions?.data?.length}</span>
          <span>{getNextLevelValue(sessions?.data?.length).totalLevel}</span>
        </div>
      </div>
    </div>
  );
};

export default LevelProfile;
