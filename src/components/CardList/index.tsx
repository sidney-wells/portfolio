import React from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import './cardlist.css';

type CardContent = {
  image: string;
  description: string;
  link: string;
};

export interface CardListProps {
  cards: CardContent[];
  empty: boolean;
}

export const CardList = ({ empty, cards, ...props }: CardListProps) => {
    if (empty) {
      return (
        <div className={['storybook-card'].join(' ')} {...props}>
        <Button label="Hello this is a button" />
      </div>
      )
    }
    else {
      {cards.forEach(card => {
        return (
          <Card content={card} />
        )
      })}
    }
};
