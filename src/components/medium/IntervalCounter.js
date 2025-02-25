import React, { useState, useEffect } from 'react';

/**
 * IntervalCounter component increments a counter every 300ms.
 */
const IntervalCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [count]);

  return <p>Count: {count}</p>;
};

export default IntervalCounter;
