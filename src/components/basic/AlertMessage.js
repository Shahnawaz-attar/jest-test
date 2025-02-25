import React from 'react';

/**
 * AlertMessage component renders an alert only if the alert prop is provided.
 *
 * @param {object} props - Component properties.
 * @param {string} props.alert - The alert message to display.
 */
const AlertMessage = ({ alert }) => {
  // Use short-circuit evaluation to render the alert only if it exists.
  return alert && <div className="alert">{alert}</div>;
};

export default AlertMessage;
