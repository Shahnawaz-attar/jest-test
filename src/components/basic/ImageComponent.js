import React from 'react';

/**
 * ImageComponent renders an image with a given source and alt text.
 *
 * @param {object} props - Component properties.
 * @param {string} props.src - The image source URL.
 * @param {string} props.alt - The alternative text for the image.
 */
const ImageComponent = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default ImageComponent;
