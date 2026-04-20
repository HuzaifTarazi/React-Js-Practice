import React from "react";
import { useParams } from "react-router";

const Productid = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Productid;
