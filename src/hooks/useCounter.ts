import { useState } from "react";

export const useCounter = (
  initialCount = 0,
  minCount = -10,
  maxCount = 100
) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    } else if (count === maxCount) {
      alert("Max Value Reached");
    }
  };
  const decrement = () => {
    if (count > minCount) {
      setCount(count - 1);
    } else if (count === minCount) {
      alert("Min Value Reached");
    }
  };
  const isEven = count % 2 === 0;
  const reset = () => setCount(initialCount);
  const maxValue = () => setCount(maxCount);
  const minValue = () => setCount(minCount);
  const plusFive = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setCount((prevCount) => {
          if (prevCount < maxCount) {
            return prevCount + 1;
          } else {
            alert("Max Value Reached");
            return prevCount;
          }
        });
      }, i * 100);
    }
  };

  return {
    count,
    increment,
    decrement,
    reset,
    maxValue,
    minValue,
    isEven,
    plusFive,
  };
};
