import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    state: {
      options: ["default", "pressed", "focus", "disable", "hover"],
      control: { type: "select" },
    },
    changeIcon: {
      options: ["icon-only", "none", "right", "left"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    type: {
      options: ["outlined", "filled", "ghost"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Button",
    state: "default",
    changeIcon: "icon-only",
    size: "large",
    type: "outlined",
    className: {},
    divClassName: {},
    frameClassName: {},
    text1: "Button",
    hasDiv: true,
  },
};
