import React, { useEffect, useRef } from "react";

const UseRefExample = () => {

  const myRef = useRef<HTMLInputElement | null>(null); // reference element type HTMLInputElement hote pare.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(myRef.current?.value);
  };

  useEffect(() => {
    myRef.current?.focus(); // page render holei focus hoiye thakbe.
  }, []);

  return (
    <div>
      <h3>useRef</h3>
      <form onSubmit={handleSubmit}>
        <input
          ref={myRef}
          className="border border-emerald-700 p-2"
          type="text"
          name="name"
          id="name"
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mx-2 mt-2"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default UseRefExample;
