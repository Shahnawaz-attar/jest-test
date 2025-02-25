import React, { useState, useEffect } from 'react';

/**
 * MessageUpdater component updates its message when the "trigger" prop changes.
 *
 * @param {object} props - Component properties.
 * @param {boolean} props.trigger - A boolean prop that triggers message update.
 */
const MessageUpdater = ({ trigger }) => {
  const [message, setMessage] = useState('Initial Message');

  useEffect(() => {
    if (trigger) {
      setMessage('Updated Message');
    }
  }, [trigger]);

  return <p>{message}</p>;
};

export default MessageUpdater;
