import { useState } from "react";

export const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);

  return { count, increment };
};
