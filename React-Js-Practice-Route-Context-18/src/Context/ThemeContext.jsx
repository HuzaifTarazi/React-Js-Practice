import React, { createContext, useState } from "react";

export const createThemeContext = createContext();

const ThemeContext = ({ children }) => {
  const [myName, setmyName] = useState("Hey I Am Huzaif Tarazi");
  return (
    <div>
      <createThemeContext.Provider value={{myName, setmyName}}>
        {children}
      </createThemeContext.Provider>
    </div>
  );
};

export default ThemeContext;
