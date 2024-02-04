import { useContext, useState } from "react";
import "./App.css";
import UseStateExample from "./hooksPages/UseStateExample";
import ControlComponentForm from "./hooksPages/controlComponentForm";
import UseReducerExample from "./hooksPages/UseReducerExample";
import UseEffectExample from "./hooksPages/UseEffectExample";
import UseRefExample from "./hooksPages/UseRefExample";
import ForwardRefExample from "./hooksPages/ForwardRefExample";
import { TThemContext, ThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/Menu";
import GameResult from "./components/GameResult";
import UserContainers from "./components/UserContainers";
import Select from "./components/CompoundComponent";

function App() {
  const [counter, setCounter] = useState(0);
  const { dark, setDark } = useContext(ThemeContext) as TThemContext;

  return (
    <div
      className={`h-screen w-full flex justify-center items-center
       ${dark ? "bg-black" : "bg-white"}`}
    >
      <Select >
        <Select.SelectOption value="Option-1">Option 1</Select.SelectOption>
        <Select.SelectOption value="Option-2">Option 2</Select.SelectOption>
        <Select.SelectOption value="Option-3">Option 3</Select.SelectOption>
      </Select>
      {/* <UserContainers/> */}
      {/* <GameResult /> */}
      {/* <button
        onClick={() => setDark(!dark)}
        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mx-2 mt-2"
      >
        Toggle-mode
      </button> */}
      {/* <ForwardRefExample/> */}
      {/* <UseRefExample /> */}
      {/* <UseEffectExample /> */}
      {/* <UseReducerExample />
      <ControlComponentForm />
      <UseStateExample counter={counter} setCounter={setCounter} /> */}
      {/* <MenuList>
        <MenuItem></MenuItem>
      </MenuList> */}
    </div>
  );
}

export default App;
