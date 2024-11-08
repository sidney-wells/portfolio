import React from "react";
import "./text.css";

interface TextProps {
  /** Content of text */
  text: string;
  /** Size of text */
  size: "primary" | "small" | "large";
}

export const Text = ({ text, size, ...props }: TextProps) => {
  let variant = "primary";
  switch (size) {
    case "small":
      variant = "small";
      break;
    case "large":
      variant = "large";
      break;
    default:
      variant = "primary";
  }

  return (
    <div
      className={["storybook-text", `storybook-text--${variant}`].join(" ")}
      {...props}
    >
      {text}
    </div>
  );
};
