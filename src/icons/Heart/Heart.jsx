/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Heart = ({ color = "white", className }) => {
  return (
    <svg
      className={`heart ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.9995 21C11.6985 20.9996 11.4045 20.9086 11.1558 20.7389C7.47189 18.2381 5.87673 16.5234 4.99689 15.4514C3.12189 13.1663 2.22423 10.8202 2.24954 8.27953C2.27908 5.36813 4.61486 3 7.45642 3C9.52267 3 10.9538 4.16391 11.7872 5.13328C11.8136 5.16368 11.8462 5.18805 11.8829 5.20476C11.9195 5.22146 11.9593 5.23011 11.9995 5.23011C12.0398 5.23011 12.0796 5.22146 12.1162 5.20476C12.1529 5.18805 12.1855 5.16368 12.2119 5.13328C13.0453 4.16297 14.4764 3 16.5427 3C19.3842 3 21.72 5.36812 21.7495 8.28C21.7749 10.8211 20.8763 13.1672 19.0022 15.4519C18.1224 16.5239 16.5272 18.2386 12.8433 20.7394C12.5946 20.9089 12.3006 20.9998 11.9995 21Z"
        fill={color}
      />
    </svg>
  );
};

Heart.propTypes = {
  color: PropTypes.string,
};
