import React from 'react';

/**
 * Greeting component displays a greeting message using a provided name.
 *
 * @param {object} props - Component properties.
 * @param {string} props.name - The name to greet.
 */
const Greeting = ({ name ="nawaz"}) => {
  // Render a heading that uses the name prop.
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
