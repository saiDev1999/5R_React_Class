import { useState } from "react";

const UseStateExample = () => {
  const initialState = 10;
  const [count, setCount] = useState(initialState);

  const counterHandler = (type, scale) => {
    switch (type) {
      case "INCREMENT":
        setCount((count) => count + scale);
        break;
      case "DECREMENT":
        if (count > 0) {
          setCount((count) => count - scale);
        }
        break;
      case "RESET":
        setCount(0);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => counterHandler("INCREMENT", 10)}>
        Increament{" "}
      </button>
      <button onClick={() => counterHandler("DECREMENT", 10)}>
        Decreament{" "}
      </button>
      <button onClick={() => counterHandler("RESET")}>reset </button>
    </>
  );
};
export default UseStateExample;
