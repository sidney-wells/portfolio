import React from "react";
import { ButtonProps, Card, ImageProps } from "../utils/index.js";

import "./cardlist.css";

type CardProps = {
  imageObject: ImageProps;
  buttonObject: ButtonProps;
  description: string;
};

interface CardListProps {
  cards: CardProps[];
  empty: boolean;
}

export const CardList = ({ empty, cards, ...props }: CardListProps) => {
  if (empty) {
    return (
      <div className={["storybook-card"].join(" ")} {...props}>
        hello
      </div>
    );
  } else {
    {
      cards.forEach((card, i) => {
        return (
          <Card
            buttonObject={card.buttonObject}
            imageObject={card.imageObject}
            description={card.description}
            key={i}
            {...props}
          />
        );
      });
    }
  }
};
