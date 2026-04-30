import React, { useContext } from "react";
import { createThemeContext } from "../Context/ThemeContext";

const Home = () => {
  const { myName, setmyName } = useContext(createThemeContext);

  return (
    <div>
      Home
      <br />
      <button
        className="bg-red-500 p-2 rounded text-white shadow mx-2 active:bg-red-600"
        onClick={() => {
          setmyName("YOU HAVE CLICKED THE BUTTON");
        }}
      >
        Click me to Change The Name
      </button>
    </div>
  );
};

export default Home;
