import React from "react";
import { Button, ButtonProps, Card, Image, ImageProps } from "../utils/index.js";

import "./cardlist.css";

type CardProps = {
  imageObject: ImageProps;
  buttonObject: ButtonProps;
}

// type CardContent = {
//   image: string;
//   description: string;
//   link: string;
// };

interface CardListProps {
  cards: CardProps[];
  empty: boolean;
}

// const buttonObject = {
//   color: "default",
//   size: "sm",
//   variant: "faded",
//   className: "hi",
//   children: "Button",
// };

// const imageObject = {
//   src: "./styling.png",
//   alt: "This is the description",
//   link: "https://wwww.google.com",
//   width: 150,
//   height: 150,
// };

export const CardList = ({ empty, cards, ...props }: CardListProps) => {
  if (empty) {
    return (
      <div className={["storybook-card"].join(" ")} {...props}>
        hello
      </div>
    );
  } else {
    {
      cards.forEach((card) => {
        return <Card buttonObject={card.buttonObject} imageObject={card.imageObject} {...props} />;
      });
    }
  }
};
