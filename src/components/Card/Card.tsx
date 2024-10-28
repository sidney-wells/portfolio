import React from 'react';
import { Button } from '../Button/Button';
import './card.css';

export interface CardProps {
  image: string;
  content: string;
  children: string;
}

export const Card = ({ image, content, children, ...props }: CardProps) => {
  return (
    <div className={['storybook-card'].join(' ')} {...props}>
      <Button label="Hello this is a button" />
      {children}
    </div>
  );
};
