import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  console.log(children);
  const [theme, settheme] = useState("light");
  return (
    <>
      <ThemeContext value={{ theme, settheme }}> {children} </ThemeContext>
    </>
  );
};

export default ThemeProvider;
