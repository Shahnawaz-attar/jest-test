import React, { useState, useEffect } from 'react';

/**
 * TimerComponent increments a counter after 500ms.
 */
const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(1), 500);
    // Cleanup the timer on unmount.
    return () => clearTimeout(timer);
  }, []);

  return <p>Count: {count}</p>;
};

export default TimerComponent;
