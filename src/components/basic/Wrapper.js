import React from 'react';

/**
 * Wrapper component displays children or a default message.
 *
 * @param {object} props - Component properties.
 * @param {React.ReactNode} props.children - Optional children elements.
 */
const Wrapper = ({ children }) => {
  // Render children if provided, otherwise show default text.
  return <div>{children || <p>No content provided.</p>}</div>;
};

export default Wrapper;
