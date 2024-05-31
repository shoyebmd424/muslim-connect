import React from "react";

function ShareSvg() {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: "20px" }}
      >
        <g filter="url(#filter0_d_140_9592)">
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
            d="M29 33C28.1667 33 27.4583 32.7083 26.875 32.125C26.2917 31.5417 26 30.8333 26 30C26 29.8833 26.0083 29.7623 26.025 29.637C26.0417 29.5117 26.0667 29.3993 26.1 29.3L19.05 25.2C18.7667 25.45 18.45 25.646 18.1 25.788C17.75 25.93 17.3833 26.0007 17 26C16.1667 26 15.4583 25.7083 14.875 25.125C14.2917 24.5417 14 23.8333 14 23C14 22.1667 14.2917 21.4583 14.875 20.875C15.4583 20.2917 16.1667 20 17 20C17.3833 20 17.75 20.071 18.1 20.213C18.45 20.355 18.7667 20.5507 19.05 20.8L26.1 16.7C26.0667 16.6 26.0417 16.4877 26.025 16.363C26.0083 16.2383 26 16.1173 26 16C26 15.1667 26.2917 14.4583 26.875 13.875C27.4583 13.2917 28.1667 13 29 13C29.8333 13 30.5417 13.2917 31.125 13.875C31.7083 14.4583 32 15.1667 32 16C32 16.8333 31.7083 17.5417 31.125 18.125C30.5417 18.7083 29.8333 19 29 19C28.6167 19 28.25 18.9293 27.9 18.788C27.55 18.6467 27.2333 18.4507 26.95 18.2L19.9 22.3C19.9333 22.4 19.9583 22.5127 19.975 22.638C19.9917 22.7633 20 22.884 20 23C20 23.1167 19.9917 23.2377 19.975 23.363C19.9583 23.4883 19.9333 23.6007 19.9 23.7L26.95 27.8C27.2333 27.55 27.55 27.3543 27.9 27.213C28.25 27.0717 28.6167 27.0007 29 27C29.8333 27 30.5417 27.2917 31.125 27.875C31.7083 28.4583 32 29.1667 32 30C32 30.8333 31.7083 31.5417 31.125 32.125C30.5417 32.7083 29.8333 33 29 33Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_140_9592"
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
              result="effect1_dropShadow_140_9592"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_140_9592"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default ShareSvg;
