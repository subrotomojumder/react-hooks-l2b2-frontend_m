import React from "react";

type TCounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: TCounter) => {
  console.log("Render");
    const handleIncrement = () => {
      setCounter((current) => current + 1);
    };
    const handleAsyncIncrement = () => {
      setTimeout(() => {
        setCounter((current) => current + 1);
      }, 2000);
    };

  return (
    <div>
      <h1 className="text-2xl">{counter}</h1>
      <button
        onClick={handleIncrement}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mx-2 mt-2"
      >
        Increment
      </button>
      <button
        onClick={handleAsyncIncrement}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mx-2 mt-2"
      >
        Async Increment
      </button>
      <button
        onClick={() => setCounter((current) => current - 1)}
        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mx-2 mt-2"
      >
        Decrement
      </button>
      <button
        onClick={() => setCounter(0)}
        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mx-2 mt-2"
      >
        Reset
      </button>
    </div>
  );
};

export default UseStateExample;
