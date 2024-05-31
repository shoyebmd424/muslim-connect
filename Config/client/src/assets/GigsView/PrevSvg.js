import React from "react";

function PrevSvg() {
  return (
    <div>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: "10" }}
      >
        <g filter="url(#filter0_d_140_9683)">
          <rect
            width="52"
            height="52"
            rx="26"
            transform="matrix(-1 0 0 1 56 4)"
            fill="white"
            shape-rendering="crispEdges"
          />
          <path
            d="M33.625 19.8852C33.3954 19.8852 33.1658 19.9669 32.9846 20.1419L25.1063 27.7486C23.8254 28.9852 23.8254 31.0152 25.1062 32.2519L32.9846 39.8586C33.335 40.1969 33.915 40.1969 34.2654 39.8586C34.6158 39.5202 34.6158 38.9602 34.2654 38.6219L26.3871 31.0152C25.8071 30.4552 25.8071 29.5452 26.3871 28.9852L34.2654 21.3786C34.6158 21.0402 34.6158 20.4802 34.2654 20.1419C34.0842 19.9786 33.8546 19.8852 33.625 19.8852Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_140_9683"
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
              result="effect1_dropShadow_140_9683"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_140_9683"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default PrevSvg;
