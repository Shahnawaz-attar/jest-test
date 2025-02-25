import React from 'react';
import { useCounter } from '../hooks/useCounter';


/**
 * CounterDisplayWithHook uses the custom hook to show a counter.
 */
const CounterDisplayWithHook = () => {
  const { count, increment } = useCounter(0);

  return (
    <div>
      <p>Hook Count: {count}</p>
      <button onClick={increment}>Increment Hook</button>
    </div>
  );
};

export default CounterDisplayWithHook;
