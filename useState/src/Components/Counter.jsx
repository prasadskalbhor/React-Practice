import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>this is value :: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          //   setCount(count ? count - 1 : count);
          count ? setCount(count - 1) : null;
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
