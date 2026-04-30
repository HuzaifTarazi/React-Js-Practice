import React, { useContext } from "react";

import { createThemeContext } from "../Context/ThemeContext";

const About = () => {
  const { myName, setmyName } = useContext(createThemeContext);
  console.log(myName);
  return (
    <>
      <div>About page</div>
      <h1>{myName}</h1>
    </>
  );
};

export default About;
