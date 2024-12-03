import React from "react";
import { ButtonProps, Image, ImageProps, TagList, TextProps } from "../utils/index.js";
import "./card.css";

interface CardProps {
  /** What the image is, it's link, and alt */
  imageObject: ImageProps;
  /** Attributes of the button on the card */
  buttonObject: ButtonProps;
  /** Description displayed on the card */
  description: string;
  /** List of skills relevant to project */
  skills: TextProps[];
}

export const Card = ({
  imageObject,
  buttonObject,
  description,
  skills,
  ...props
}: CardProps) => {
  const { src, alt, link, width, height, ...imageProps } = imageObject;
  const { primary, backgroundColor, size, label, onClick, ...buttonProps } =
    buttonObject;
  return (
    <div className="storybook-card" {...props}>
      <div className="storybook-card-image">
        <Image
          src={src}
          alt={alt}
          link={link}
          width={width}
          height={height}
          {...imageProps}
        />
      </div>
      <div className="storybook-card-description">
        {description}
      </div>
      <div className="storybook-card-tags">
        <TagList skills={skills} />
      </div>
    </div>
  );
};
