import React from "react";
import "./image.css";

export interface CardProps {
  src: string;
  alt: string;
  link: string;
}

export const Image = ({ src, alt, link, ...props }: CardProps) => {
  return (
    <a href={link} target="_blank">
      <img
        className={["storybook-image"].join(" ")}
        src={src}
        alt={alt}
        {...props}
      />
    </a>
  );
};
