import React from 'react';

/**
 * ShowMessage component conditionally renders a message if the "show" prop is true.
 *
 * @param {object} props - Component properties.
 * @param {boolean} props.show - Determines whether to show the message.
 */
const ShowMessage = ({ show = true }) => {
  // Use a ternary operator to conditionally render.
  return show ? <p>The message is visible.</p> : null;
};

export default ShowMessage;
