import React from 'react';

/**
 * Container component renders any child elements passed to it.
 *
 * @param {object} props - Component properties.
 * @param {React.ReactNode} props.children - Child elements to display.
 */
const Container = ({ children }) => {
  // Render a div that wraps around the children.
  return <div className="container">{children}</div>;
};

export default Container;
