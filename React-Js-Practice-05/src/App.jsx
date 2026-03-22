import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Card/Cards";
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex-items">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default App;
