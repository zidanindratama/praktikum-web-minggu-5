import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Count;
