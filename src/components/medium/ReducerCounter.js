import React, { useReducer } from 'react';
import { counterReducer } from '../context/counterReducer';
/**
 * ReducerCounter component uses useReducer to manage counter state.
 */
const ReducerCounter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <p>Reducer Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment Reducer</button>
    </div>
  );
};

export default ReducerCounter;
