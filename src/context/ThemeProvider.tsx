import { ReactNode, createContext, useState } from "react";

export type TThemContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
type TThemProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<TThemContext | undefined>(undefined);

const ThemeProvider = ({ children }: TThemProviderProps) => {
  const [dark, setDark] = useState(false);

  const values = {
    dark,
    setDark,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
