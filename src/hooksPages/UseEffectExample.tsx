import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="">
      {/* <p>UseEffectExample</p> */}
      {/* {!hidden && <Counter />} */}
      {/* {!hidden && <Todo />} */}
      {/* <button
        onClick={() => setHidden((c) => !c)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mx-2 mt-2"
      >
        {hidden ? "Show" : "Hidden"}
      </button> */}
      <Inputs />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(count);
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h4 className="text-2xl border px-4 py-2 w-fit mx-auto">{count}</h4>
    </div>
  );
};

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((response) => response.json())
      .then((data) => alert(data.title));

    return () => {
      controller.abort();
    };
  }, []);
  return <div className="border p-2 my-2">todo</div>;
};

const Inputs = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  console.log(user);

  useEffect(() => {
    console.log("Render");
  }, [user.name, user.email]);

  return (
    <div>
      <input
        onBlur={(e) => setUser((c) => ({ ...c, name: e.target.value }))}
        className="border mx-1 p-2 mt-4 border-red-500"
        type="name"
        name="name"
        id="name"
      />
      <input
        onBlur={(e) => setUser((c) => ({ ...c, email: e.target.value }))}
        className="border mx-1 p-2 mt-4 border-red-500"
        type="email"
        name="email"
        id="email"
      />
    </div>
  );
};
