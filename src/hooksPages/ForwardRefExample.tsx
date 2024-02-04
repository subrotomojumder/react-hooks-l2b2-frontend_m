import { useEffect, useRef } from "react";
import CustomInput from "../components/CustomInput";

const ForwardRefExample = () => {
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
      <h3>Forward ref</h3>
      <form onSubmit={handleSubmit}>
        <CustomInput ref={myRef} className={"border border-emerald-700 p-2"} />
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

export default ForwardRefExample;
