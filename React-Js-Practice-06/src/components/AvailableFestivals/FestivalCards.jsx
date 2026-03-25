import React from "react";

const FestivalCards = ({ name, icons }) => {
  return (
    <>
      <div className="flex flex-row  items-center border-2 border-gray-400 w-70 px-8 rounded-2xl bg-gray-100">
        <span className="text-emerald-500 ">{icons}</span>
        <p className="px-5 text-xl">{name}</p>
      </div>
    </>
  );
};

export default FestivalCards;
