import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero.jsx";
import Festivals from "./components/AvailableFestivals/Festivals.jsx";
import {festivalIcons} from "./FestivalApi"
import PopularContent from "./components/Popular/PopularContent.jsx";

const App = () => {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Festivals festivalIcons={festivalIcons}/>
      <PopularContent/>

    </>
  );
};

export default App;
