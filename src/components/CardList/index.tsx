import React from "react";
import { ButtonProps, Card, ImageProps, TextProps } from "../utils/index.js";
import "./cardlist.css";

type CardProps = {
  imageObject: ImageProps;
  buttonObject: ButtonProps;
  description: string;
  skills: TextProps[];
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
    return (
      <div className="storybook-cardlist">
        {cards.map((card, i) => (
          <Card
            buttonObject={card.buttonObject}
            imageObject={card.imageObject}
            description={card.description}
            skills={card.skills}
            key={i}
            {...props}
          />
        ))}
      </div>
    );
  }
};
