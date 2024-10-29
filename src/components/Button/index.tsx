import React from "react";
import "./button.css";
import { Button as NextButton } from "@nextui-org/button";

interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** Color version of button */
  color: string;
  /** Radius of the button */
  radius?: "sm" | "md" | "lg" | "none" | "full";
  /** What background color to use */
  backgroundColor?: string;
  /** Variant type */
  variant?: "faded" | "bordered" | "light" | "flat" | "ghost" | "shadow";
  /** How large should the button be? */
  size?: "sm" | "md" | "lg";
  /** Button contents */
  label: string;
  /** Classname applies css to component */
  className: string;
  /** Text inside button */
  children: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
const Button = ({
  primary = false,
  color,
  size = "md",
  radius,
  variant,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <NextButton
      color={color}
      size={size}
      radius={radius}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextButton>
  );
};

export { Button, type ButtonProps };
