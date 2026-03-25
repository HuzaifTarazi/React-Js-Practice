import React from "react";
import SearchBox from "./SearchBox.jsx";
import HeroContent2 from "./HeroContent2.jsx";

const HeroContent = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center h-170 w-full text-white">
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <h1 className="relative top-0 left-0 text-5xl leading-tight font-semibold py-10 text-center">
          Unlock the stage to <br />
          <span className="text-emerald-400 text-5xl">
            unforgettable sounds.
          </span>
        </h1>

        <SearchBox />
        <HeroContent2 />
      </div>
    </>
  );
};

export default HeroContent;
