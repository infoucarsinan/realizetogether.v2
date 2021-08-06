import React from "react";

function AddConnectionIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="36"
      height="38"
      viewBox="0 0 36 30"
    >
      <g transform="translate(0 -3)">
        <path
          d="M24,31.5v-3a6,6,0,0,0-6-6H7.5a6,6,0,0,0-6,6v3"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          d="M18.75,10.5a6,6,0,1,1-6-6,6,6,0,0,1,6,6Z"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          d="M30,12v9"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          d="M34.5,16.5h-9"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </svg>
  );
}

export default AddConnectionIcon;
