import { useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const UseReducerExample = () => {
  const initialState = { name: "", email: "" };

  const reducer = (currentState: typeof initialState, action: TAction) => {
    switch (action.type) {
      case "addName":
        return { ...currentState, name: action.payload };
      case "addEmail":
        return { ...currentState, email: action.payload };
      default:
        return currentState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="border m-2 py-4">
      <h3 className="mb-4">UserReducer example</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="border mx-1 p-2"
          type="name"
          name="name"
          id="name"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
          className="border mx-1 p-2"
          type="email"
          name="email"
          id="email"
        />
        <button className="border mx-1 p-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseReducerExample;
