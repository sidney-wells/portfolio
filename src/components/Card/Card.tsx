import React from 'react';
import { Button } from '../Button/Button';
import './card.css';

export interface CardProps {
  empty: boolean;
  image?: string;
  content?: string;
  children: string;
}

export const Card = ({ empty, image, content, children, ...props }: CardProps) => {
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
        <div className={['storybook-card'].join(' ')} {...props}>
        <Button label="Hello this is a button" />
        {children}
      </div>
       )
    }
};