import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ theme, size, className, ...rest }) => {
  let themeClass;
  let sizeBtn;

  if (theme == "secondary") {
    themeClass = "text-white bg-indigo-600 ";
  }

  switch (size) {
    case "small":
      sizeBtn = "text-sm";
      break;
    case "medium":
      sizeBtn = "text-md";
      break;
    case "large":
      sizeBtn = "text-2xl";
      break;
    default:
      break;
  }

  return (
    <button
      {...rest}
      className={
        "px-2 py-1  border rounded-md bg-blue-400 text-white " +
        className +
        " " +
        themeClass +
        " " +
        sizeBtn
      }
    ></button>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "small",
};

export default Button;
