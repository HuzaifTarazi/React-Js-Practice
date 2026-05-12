import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const nameContext = createContext();

const NameProvider = ({ children }) => {
  const [name, setname] = useState("Huzaif");
  return (
    <nameContext.Provider value={{ name, setname }}>
      {children}
    </nameContext.Provider>
  );
};

export default NameProvider;
