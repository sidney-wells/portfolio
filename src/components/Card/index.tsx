import React from "react";
import { Button, ButtonProps, Image, ImageProps } from "../utils/index.js";
import "./card.css";

interface CardProps {
  /** What the image is, it's link, and alt */
  imageObject: ImageProps;
  /** Attributes of the button on the card */
  buttonObject: ButtonProps;
  /** Description displayed on the card */
  description: string;
}

export const Card = ({
  imageObject,
  buttonObject,
  description,
  ...props
}: CardProps) => {
  const { src, alt, link, width, height, ...imageProps } = imageObject;
  const { primary, backgroundColor, size, label, onClick, ...buttonProps } =
    buttonObject;
  return (
    <div className={["storybook-card"].join(" ")} {...props}>
      <div className={["storybook-card-image"].join(" ")}>
        <Image
          src={src}
          alt={alt}
          link={link}
          width={width}
          height={height}
          {...imageProps}
        />
      </div>
      <div className={["storybook-card-button"].join(" ")}>
        <Button
          primary={primary}
          backgroundColor={backgroundColor}
          label={label}
          onClick={onClick}
          {...buttonProps}
        />
      </div>
      <div className={["storybook-card-description"].join(" ")}>
        {description}
      </div>
    </div>
  );
};
