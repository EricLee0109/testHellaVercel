/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AlertCircle } from "../../icons/AlertCircle";
import { ChevronDown } from "../../icons/ChevronDown";
import { IconsSearch24Px } from "../../icons/IconsSearch24Px";
import "./style.css";

export const TextField = ({
  supportingText = true,
  supportingText1 = "Supporting text",
  label = "Label",
  input = "Input",
  style,
  state,
  textConfigurations,
  leadingIcon,
  trailingIcon,
  className,
  icon = <ChevronDown className="instance-node" />,
  stateLayerClassName,
  inputType = "text",
  inputType1 = "text",
  inputType2 = "text",
}) => {
  return (
    <div className={`text-field ${className}`}>
      <div className={`state-layer-wrapper ${state}`}>
        <div
          className={`state-layer state-${state} trailing-icon-${trailingIcon} leading-icon-${leadingIcon} ${textConfigurations} ${
            ["enabled", "error", "focused", "hovered"].includes(state) ? stateLayerClassName : undefined
          }`}
        >
          {((leadingIcon && !trailingIcon) || (trailingIcon && !leadingIcon)) && (
            <>
              <div className="content">
                {((!leadingIcon && state === "focused" && textConfigurations === "label-text") ||
                  (!leadingIcon && textConfigurations === "input-text") ||
                  (!leadingIcon && textConfigurations === "placeholder-text")) && (
                  <>
                    <div className="div">
                      {((state === "disabled" && textConfigurations === "input-text") ||
                        (state === "enabled" && textConfigurations === "input-text") ||
                        (state === "hovered" && textConfigurations === "input-text") ||
                        textConfigurations === "placeholder-text") && (
                        <div className="input-text-2">
                          {textConfigurations === "input-text" && <>{input}</>}

                          {textConfigurations === "placeholder-text" && <>Placeholder</>}
                        </div>
                      )}

                      {textConfigurations === "input-text" && ["error", "focused"].includes(state) && (
                        <>
                          <input className="input" placeholder={input} type={inputType} />
                          <img
                            className="caret"
                            alt="Caret"
                            src={
                              state === "error"
                                ? "https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/caret-4.svg"
                                : "https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/caret.svg"
                            }
                          />
                        </>
                      )}

                      {textConfigurations === "label-text" && (
                        <img
                          className="img"
                          alt="Caret"
                          src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/caret.svg"
                        />
                      )}
                    </div>
                    <div className="label-text-wrapper">
                      <div className="text-wrapper">{label}</div>
                    </div>
                  </>
                )}

                {((!leadingIcon && state === "disabled" && textConfigurations === "label-text") ||
                  (!leadingIcon && state === "enabled" && textConfigurations === "label-text") ||
                  (!leadingIcon && state === "error" && textConfigurations === "label-text") ||
                  (!leadingIcon && state === "hovered" && textConfigurations === "label-text") ||
                  leadingIcon) && (
                  <div className="container">
                    <div className="state-layer-2">
                      {!trailingIcon && <IconsSearch24Px className="instance-node" />}

                      {trailingIcon && <>{label}</>}
                    </div>
                  </div>
                )}
              </div>
              <div className="trailing-icon">
                {((!leadingIcon && state === "enabled") ||
                  (!leadingIcon && state === "error") ||
                  (!leadingIcon && state === "focused") ||
                  (!leadingIcon && state === "hovered")) && <>{icon}</>}

                {((leadingIcon && state === "focused" && textConfigurations === "label-text") ||
                  (leadingIcon && textConfigurations === "input-text") ||
                  (leadingIcon && textConfigurations === "placeholder-text")) && (
                  <>
                    <div className="input-text-3">
                      {((state === "disabled" && textConfigurations === "input-text") ||
                        (state === "enabled" && textConfigurations === "input-text") ||
                        (state === "hovered" && textConfigurations === "input-text") ||
                        textConfigurations === "placeholder-text") && (
                        <div className="input-text-4">
                          {textConfigurations === "input-text" && <>{input}</>}

                          {textConfigurations === "placeholder-text" && <>Placeholder</>}
                        </div>
                      )}

                      {textConfigurations === "input-text" && ["error", "focused"].includes(state) && (
                        <>
                          <input className="input" placeholder={input} type={inputType1} />
                          <img
                            className="caret"
                            alt="Caret"
                            src={
                              state === "error"
                                ? "https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/caret-4.svg"
                                : "https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/caret.svg"
                            }
                          />
                        </>
                      )}

                      {textConfigurations === "label-text" && (
                        <img
                          className="img"
                          alt="Caret"
                          src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/caret.svg"
                        />
                      )}
                    </div>
                    <div className="div-wrapper">
                      <div className="label-text-2">{label}</div>
                    </div>
                  </>
                )}

                {trailingIcon && state === "disabled" && <ChevronDown className="instance-node" />}

                {((leadingIcon && state === "disabled" && textConfigurations === "label-text") ||
                  (leadingIcon && state === "enabled" && textConfigurations === "label-text") ||
                  (leadingIcon && state === "error" && textConfigurations === "label-text") ||
                  (leadingIcon && state === "hovered" && textConfigurations === "label-text")) && (
                  <div className="label-text-3">
                    <div className="label-text-4">{label}</div>
                  </div>
                )}
              </div>
            </>
          )}

          {trailingIcon && leadingIcon && (
            <div className="leading-icon">
              <div className="container-2">
                <div className="icons-search-wrapper">
                  <IconsSearch24Px className="instance-node" />
                </div>
              </div>
            </div>
          )}

          {((leadingIcon && trailingIcon) || (!leadingIcon && !trailingIcon)) && (
            <div className="content-2">
              {((state === "disabled" && textConfigurations === "input-text") ||
                (state === "disabled" && textConfigurations === "placeholder-text") ||
                (state === "enabled" && textConfigurations === "input-text") ||
                (state === "enabled" && textConfigurations === "placeholder-text") ||
                (state === "error" && textConfigurations === "input-text") ||
                (state === "error" && textConfigurations === "placeholder-text") ||
                state === "focused" ||
                (state === "hovered" && textConfigurations === "input-text") ||
                (state === "hovered" && textConfigurations === "placeholder-text")) && (
                <>
                  <div className="input-text-5">
                    {((state === "disabled" && textConfigurations === "input-text") ||
                      (state === "enabled" && textConfigurations === "input-text") ||
                      (state === "hovered" && textConfigurations === "input-text") ||
                      textConfigurations === "placeholder-text") && (
                      <div className="input-text-6">
                        {textConfigurations === "input-text" && <>{input}</>}

                        {textConfigurations === "placeholder-text" && <>Placeholder</>}
                      </div>
                    )}

                    {textConfigurations === "input-text" && ["error", "focused"].includes(state) && (
                      <>
                        <input className="input" placeholder={input} type={inputType2} />
                        <img
                          className="caret"
                          alt="Caret"
                          src={
                            state === "error"
                              ? "https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/caret-4.svg"
                              : "https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/caret.svg"
                          }
                        />
                      </>
                    )}

                    {textConfigurations === "label-text" && (
                      <img
                        className="img"
                        alt="Caret"
                        src="https://cdn.animaapp.com/projects/65ae1478751d8d2bdf671804/releases/65ae14bd644039d4d5311ee8/img/caret.svg"
                      />
                    )}
                  </div>
                  <div className="label-text-5">
                    <div className="label-text-6">{label}</div>
                  </div>
                </>
              )}

              {((state === "disabled" && textConfigurations === "label-text") ||
                (state === "enabled" && textConfigurations === "label-text") ||
                (state === "error" && textConfigurations === "label-text") ||
                (state === "hovered" && textConfigurations === "label-text")) && (
                <div className="label-text-3">
                  <div className="label-text-7">{label}</div>
                </div>
              )}
            </div>
          )}

          {trailingIcon && leadingIcon && (
            <div className="trailing-icon-2">
              {["disabled", "enabled", "focused", "hovered"].includes(state) && (
                <ChevronDown className="instance-node" />
              )}

              {state === "error" && <AlertCircle className="instance-node" />}
            </div>
          )}
        </div>
      </div>
      {supportingText && (
        <div className={`supporting-text state-13-${state}`}>
          <div className="supporting-text-2">{supportingText1}</div>
        </div>
      )}
    </div>
  );
};

TextField.propTypes = {
  supportingText: PropTypes.bool,
  supportingText1: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.string,
  style: PropTypes.oneOf(["outlined"]),
  state: PropTypes.oneOf(["enabled", "focused", "hovered", "error", "disabled"]),
  textConfigurations: PropTypes.oneOf(["input-text", "label-text", "placeholder-text"]),
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
  inputType2: PropTypes.string,
};
