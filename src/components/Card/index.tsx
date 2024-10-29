import React from "react";
import { Button, ButtonProps, Image, ImageProps } from "../utils/index.js";
import "./card.css";

interface CardProps {
  imageObject: ImageProps;
  buttonObject: ButtonProps;
}

export const Card = ({ imageObject, buttonObject, ...props }: CardProps) => {
  const { src, alt, link, width, height, ...imageProps } = imageObject;
  const { color, size, label, onClick, ...props } = buttonObject;
  // if (empty) {
  //   return (
  //     <div className={['storybook-card'].join(' ')} {...props}>
  //     <Button label="Hello this is a button" />
  //   </div>
  //   )
  // }
  // else {
  return (
    <div className={["storybook-card"].join(" ")} {...props}>
      <Image src={src} alt={alt} link={link} width={width} height={height} {...imageProps} />
      <Button label="Hello this is a button" />
      {description}
      {link}
    </div>
  );
  // }
};
