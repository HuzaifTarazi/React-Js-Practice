import React from "react";
import { useContext } from "react";
import { nameContext } from "../context/NameProvider";

const Third = () => {
  const {name} = useContext(nameContext);
  return (
    <>
      {" "}
      <div>thired</div>
      <h1>{name}</h1>
    </>
  );
};

export default Third;
