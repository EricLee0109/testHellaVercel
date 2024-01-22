/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AddOutline135 } from "../../icons/AddOutline135";
import "./style.css";

export const Button = ({
  text = "Button",
  state,
  changeIcon,
  size,
  type,
  className,
  icon = <AddOutline135 className="add-outline" color="#9BE0C8" />,
  divClassName,
  frameClassName,
  text1 = "Button",
  hasDiv = true,
}) => {
  return (
    <button
      className={`button ${type} ${changeIcon} ${state} ${size} ${className}`}
    >
      <div className={`frame ${frameClassName}`}>
        {changeIcon === "none" && (
          <div className="div-2">
            {["large", "small"].includes(size) && <>{text}</>}

            {size === "medium" && <>{text1}</>}
          </div>
        )}

        {["left", "right"].includes(changeIcon) && (
          <>
            <>
              {hasDiv && (
                <>
                  <>
                    {changeIcon === "right" && (
                      <div className="div-3">
                        {["large", "small"].includes(size) && <>{text}</>}

                        {size === "medium" && <>{text1}</>}
                      </div>
                    )}

                    {changeIcon === "left" && <>{icon}</>}
                  </>
                </>
              )}
            </>
          </>
        )}

        {["icon-only", "right"].includes(changeIcon) && (
          <AddOutline135
            className={`${
              state === "default" &&
              type === "filled" &&
              size === "large" &&
              changeIcon === "icon-only"
                ? "class"
                : state === "default" &&
                  type === "outlined" &&
                  size === "large" &&
                  changeIcon === "icon-only"
                ? "class-2"
                : "add-outline"
            }`}
            color={
              state === "disable"
                ? "#8F8C91"
                : type === "ghost" && state === "hover"
                ? "#9BE0C8"
                : type === "ghost" && state === "pressed"
                ? "#82CBB2"
                : "#112211"
            }
          />
        )}

        {changeIcon === "left" && (
          <div className={`div-4 ${divClassName}`}>
            {["large", "small"].includes(size) && <>{text}</>}

            {size === "medium" && <>{text1}</>}
          </div>
        )}
      </div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  state: PropTypes.oneOf(["default", "pressed", "focus", "disable", "hover"]),
  changeIcon: PropTypes.oneOf(["icon-only", "none", "right", "left"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  type: PropTypes.oneOf(["outlined", "filled", "ghost"]),
  text1: PropTypes.string,
  hasDiv: PropTypes.bool,
};
