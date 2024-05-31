import React from "react";

function UpnextSvg() {
  return (
    <div>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: "10", marginLeft: "-30px" }}
      >
        <g filter="url(#filter0_d_140_9677)">
          <rect
            x="4"
            y="4"
            width="52"
            height="52"
            rx="26"
            fill="white"
            shape-rendering="crispEdges"
          />
          <path
            d="M26.375 19.8852C26.6046 19.8852 26.8342 19.9669 27.0154 20.1419L34.8937 27.7486C36.1746 28.9852 36.1746 31.0152 34.8937 32.2519L27.0154 39.8586C26.665 40.1969 26.085 40.1969 25.7346 39.8586C25.3842 39.5202 25.3842 38.9602 25.7346 38.6219L33.6129 31.0152C34.1929 30.4552 34.1929 29.5452 33.6129 28.9852L25.7346 21.3786C25.3842 21.0402 25.3842 20.4802 25.7346 20.1419C25.9158 19.9786 26.1454 19.8852 26.375 19.8852Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_140_9677"
            x="0"
            y="0"
            width="60"
            height="60"
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
              result="effect1_dropShadow_140_9677"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_140_9677"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default UpnextSvg;
