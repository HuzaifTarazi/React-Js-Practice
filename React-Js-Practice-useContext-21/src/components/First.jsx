import React from "react";
import { useContext } from "react";
import { nameContext } from "../context/NameProvider";

const First = () => {
  const { name, setname } = useContext(nameContext);

  return (
    <>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setname("I AM CHANGED..");
        }}
      >
        Click to Change
      </button>
    </>
  );
};

export default First;
