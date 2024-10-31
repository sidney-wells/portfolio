import React from "react";
import "./button.css";
import { Button as NextButton } from "@nextui-org/react";

interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** Color version of button */
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Radius of the button */
  radius?: "sm" | "md" | "lg" | "none" | "full";
  /** How large should the button be? */
  size?: "sm" | "md" | "lg";
  /** Variant type */
  variant?: "faded" | "bordered" | "light" | "flat" | "ghost" | "shadow";
  /** Classname applies css to component */
  className: string;
  /** Text inside button */
  children: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
const Button = ({
  primary,
  color,
  size,
  radius,
  variant,
  className,
  children,
  onClick,
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
      className={['storybook-button'].join(' ')}
      {...props}
    >
      {children}
    </NextButton>
  );
};

export { Button, type ButtonProps };
