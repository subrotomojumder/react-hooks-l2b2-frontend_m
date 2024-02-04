import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);

const Select = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
    </SelectContext.Provider>
  );
};

const SelectOption = ({ value, children }) => {
  const { selectedOption } = useSelectContext();
  const isActive = selectedOption === value;
  console.log(selectedOption);
  return (
    <option value={value} className={`${isActive ? "bg-purple-400" : ""}`}>
      {children}
    </option>
  );
};

// create compound component
Select.SelectOption = SelectOption;

export default Select;

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Context out of bound!");
  }
  return context;
};
