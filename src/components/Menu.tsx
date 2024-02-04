import { createContext, useContext } from "react";

export const MenuContext = createContext(null);

export const MenuList = ({ children }) => {
  return (
    <MenuContext.Provider value={{ theme: "dark" }}>
      {children}
    </MenuContext.Provider>
  );
};

export const MenuItem = () => {
  const { theme } = useContext(MenuContext);
  return <div>Menu Item {theme}</div>;
};          

























