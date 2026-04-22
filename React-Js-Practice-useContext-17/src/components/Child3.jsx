import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Child3 = () => {
  const { theme, settheme } = useContext(ThemeContext);
  return <div>Child3 : {theme}</div>;
};

export default Child3;
