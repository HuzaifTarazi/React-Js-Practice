import React from "react";
import FestivalCards from "./FestivalCards.jsx";

const Festivals = ({ festivalIcons }) => {
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center py-13 px-50 h-70 bg-gray-100">
      {festivalIcons.map((element) => {
        return (
          <FestivalCards
            key={element.id}
            name={element.name}
            icons={element.icon}
          />
        );
      })}
    </div>
  );
};

export default Festivals;
