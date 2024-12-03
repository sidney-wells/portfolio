import React from "react";
import imageStyle from "./image";
import NextImage from "next/image";

interface ImageProps {
  /** Source of image component */
  src: string;
  /** Alt text if no image */
  alt: string;
  /** Link for the image */
  link?: string;
  /** Width */
  width: number;
  /** Height */
  height: number;
}

const Image = ({ src, alt, width, height, link, ...props }: ImageProps) => {
  return (
    <div >
      <a href={link} target="_blank">
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={imageStyle}
          {...props}
        />
      </a>
    </div>
  );
};

export { Image, type ImageProps };
