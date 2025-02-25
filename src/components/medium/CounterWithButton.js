import React, { useState, useEffect } from 'react';

/**
 * CounterWithButton component increments a counter when a button is clicked.
 */
const CounterWithButton = () => {
  const [count, setCount] = useState(0);

  // Optional: useEffect to log count changes.
  useEffect(() => {
    // This could be replaced by any side-effect.
    console.log(`Count changed to ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default CounterWithButton;
