/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ArrowFalse = ({ className }) => {
  return (
    <svg
      className={`arrow-false ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9687 21 12C21 7.03125 16.9687 3 12 3C7.03125 3 3 7.03125 3 12Z"
        stroke="black"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M16.5 10.125L12 14.625L7.5 10.125"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
