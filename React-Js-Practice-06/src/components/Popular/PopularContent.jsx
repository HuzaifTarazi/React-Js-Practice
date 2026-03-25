import React from "react";
import SectionFirst from "./SectionFirst";
import SectionTwo from "./SectionTwo";
import Cards from "./Cards";

const PopularContent = () => {
  return (
    <div className="py-12 px-16">
      <SectionFirst />
      <SectionTwo />
      <Cards />
    </div>
  );
};

export default PopularContent;
