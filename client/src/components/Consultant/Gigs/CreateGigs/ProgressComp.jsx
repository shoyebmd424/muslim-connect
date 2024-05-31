import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
const ProgressComp = ({ index }) => {
  return (
    <div className="progress1 pt-5">
      <div className="d-flex pregress-comp-bar align-items-center">
        <div className="d-flex align-items-center w-100  text-center">
          <span
            className={
              stepsString[index] === "selection" ||
              stepsString[index] === "service" ||
              stepsString[index] === "content" ||
              stepsString[index] === "media"
                ? "navbar-active"
                : ""
            }
          >
            <FaRegDotCircle size={20} />
          </span>
          <div
            className={` w-100  ${
              stepsString[index] === "selection" ||
              stepsString[index] === "service" ||
              stepsString[index] === "content" ||
              stepsString[index] === "media"
                ? "progress-line-active"
                : "progress-line"
            }`}
          ></div>
        </div>
        <div className="d-flex align-items-center w-100">
          <span
            className={
              stepsString[index] === "selection" &&
              stepsString[index] === "service" &&
              stepsString[index] === "content" &&
              stepsString[index] === "media"
                ? "navbar-active"
                : ""
            }
          >
            <FaRegDotCircle size={20} />
          </span>
          <div
            className={` w-100  ${
              stepsString[index] === "service" ||
              stepsString[index] === "content" ||
              stepsString[index] === "media"
                ? "progress-line-active"
                : "progress-line"
            }`}
          ></div>
        </div>
        <div className="d-flex align-items-center w-100">
          <span
            className={
              stepsString[index] === "service" ||
              stepsString[index] === "content" ||
              stepsString[index] === "media"
                ? "navbar-active"
                : ""
            }
          >
            <FaRegDotCircle size={20} />
          </span>
          <div
            className={` w-100  ${
              stepsString[index] === "content" || stepsString[index] === "media"
                ? "progress-line-active"
                : "progress-line"
            }`}
          ></div>
          <span
            className={
              stepsString[index] === "content" || stepsString[index] === "media"
                ? "navbar-active"
                : ""
            }
          >
            <FaRegDotCircle size={20} />
          </span>
        </div>
      </div>
      <div className="d-flex align-items-center gap-2 progress-content justify-content-center ">
        <div
          className={`w-100 text-center ${
            (stepsString[index] === "selection" ||
              stepsString[index] === "service" ||
              stepsString[index] === "content" ||
              stepsString[index] === "media") &&
            "navbar-active"
          }`}
        >
          <div className=" fw-semibold">Sélection de thèmes</div>
          <small style={{ fontSize: "13px" }}>
            Sélectionnez un thème, donnez un titre
          </small>
        </div>
        <div
          className={`w-100 text-center ${
            (stepsString[index] === "service" ||
              stepsString[index] === "content" ||
              stepsString[index] === "media") &&
            "navbar-active"
          }`}
        >
          <div className=" fw-semibold">Sélection de thèmes</div>
          <small style={{ fontSize: "13px" }}>
            Sélectionnez un thème, donnez un titre
          </small>
        </div>
        <div
          className={`w-100 text-center ${
            (stepsString[index] === "content" ||
              stepsString[index] === "media") &&
            "navbar-active"
          }`}
        >
          <div className=" fw-semibold">Sélection de thèmes</div>
          <small style={{ fontSize: "13px" }}>
            Sélectionnez un thème, donnez un titre
          </small>
        </div>
        <div
          className={`w-100 text-center ${
            stepsString[index] === "media" && "navbar-active"
          }`}
        >
          <div className=" fw-semibold">Sélection de thèmes</div>
          <small style={{ fontSize: "13px" }}>
            Sélectionnez un thème, donnez un titre
          </small>
        </div>
      </div>
    </div>
  );
};

export default ProgressComp;
const stepsString = ["selection", "service", "content", "media"];
