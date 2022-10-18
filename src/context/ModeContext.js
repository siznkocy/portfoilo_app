import { createContext, useContext, useState } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    return setDarkMode(!darkMode);
  };

  return (
    <ModeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const UserMode = () => {
  return useContext(ModeContext);
};
