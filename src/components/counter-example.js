import React from "react";
import useCounter from "./custom-hooks/use-counter";

function CounterExample() {
  const [count, incrementCount, decrementCount, resetCount] = useCounter(
    10,
    10
  );
  const [age, incrementAge, decrementAge, resetAge] = useCounter(100, 1);
  const [salary, incrementsalary] = useCounter(10000, 1000);
  return (
    <div>
      <h2>{count}</h2>
      <h2>{age}</h2>
      <h2>{salary}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
        onClick={incrementCount}
      >
        Increment count
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
        onClick={incrementAge}
      >
        Increment Age
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
        onClick={incrementsalary}
      >
        Increment Salary
      </button>
    </div>
  );
}

export default CounterExample;
