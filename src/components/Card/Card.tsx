import React from "react";
import { Button } from "../Button/Button";
import "./card.css";

type CardContent = {
  image: string;
  description: string;
  link?: string;
};

export interface CardProps {
  content: CardContent;
}

export const Card = ({ content, ...props }: CardProps) => {
  const { image, description, link } = content;
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
      <img src={image} alt="This is an image" />
      <Button label="Hello this is a button" />
      {description}
      {link}
    </div>
  );
  // }
};
