import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setincrementBy] = useState(1);
  function counterIncrease() {
    return setCount(count + incrementBy);
  }
  function counterDecrease() {
    return setCount(count - incrementBy);
  }

  function increseby() {
    setincrementBy(incrementBy + 1);
  }

  function decreseby() {
    setincrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h1>Managing States ↓</h1>

      <h1>Counter Value is: {count}</h1>
      <button onClick={counterIncrease}> ++ </button>
      <button onClick={counterDecrease}> -- </button>
      <p>
        THIS BELOW BUTTON IS USED TO INCREASE THE NUMBER OF ADDITION THE
        INCREMENT BUTTON WILL DO
      </p>
      <h2>Currently incrementing by:{incrementBy}</h2>
      <button onClick={increseby}> +1 </button>
      <button onClick={decreseby}> -1 </button>
    </div>
  );
}
