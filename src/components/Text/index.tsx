import React from "react";
import "./text.css";

interface TextProps {
  /** Content of text */
  text: string;
  /** Size of text */
  size: "primary" | "small" | "large";
  /** Change text color if taglist */
  taglist?: boolean
}

export const Text = ({ taglist, text, size, ...props }: TextProps) => {
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
      className={taglist ? ["storybook-text-taglist", `storybook-text--${variant}`].join(" ") : ["storybook-text", `storybook-text--${variant}`].join(" ")}
      {...props}
    >
      {text}
    </div>
  );
};
