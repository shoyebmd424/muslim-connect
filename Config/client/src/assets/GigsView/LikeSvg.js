import React from "react";

function LikeSvg() {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: "20px", marginRight: "20px" }}
      >
        <g filter="url(#filter0_d_140_9595)">
          <rect
            x="4"
            y="4"
            width="38"
            height="38"
            rx="5"
            fill="white"
            shape-rendering="crispEdges"
          />
          <path
            d="M23 32.35L21.55 31.03C16.4 26.36 13 23.27 13 19.5C13 16.41 15.42 14 18.5 14C20.24 14 21.91 14.81 23 16.08C24.09 14.81 25.76 14 27.5 14C30.58 14 33 16.41 33 19.5C33 23.27 29.6 26.36 24.45 31.03L23 32.35Z"
            fill="black"
            fill-opacity="0.3"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_140_9595"
            x="0"
            y="0"
            width="46"
            height="46"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_140_9595"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_140_9595"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default LikeSvg;
