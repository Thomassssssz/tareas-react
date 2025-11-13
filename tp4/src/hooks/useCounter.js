import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = (n = 1) => setCount((c) => c + n);

  const decrement = (n = 1) => setCount((c) => (c - n < 1 ? 1 : c - n));

  return { count, increment, decrement };
};
