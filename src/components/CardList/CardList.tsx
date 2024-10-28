import React from 'react';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';

import './card.css';

export interface CardProps {
  list: typeof Card[];
  empty: boolean;
}

export const CardList = ({ empty, list, ...props }: CardProps) => {
    if (empty) {
      return (
        <div className={['storybook-card'].join(' ')} {...props}>
        <Button label="Hello this is a button" />
        {children}
      </div>
      )
    }
    else {
      return (
        {list.map(card => {
          return (
            <Card card />
          )
        })}
        
       )
    }
};
