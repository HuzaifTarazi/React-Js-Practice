import React from "react";
import CardsContent from "./CardsContent";

const Cards = () => {
  return (
    <div className="border-1 border-gray-400 bg-gray-200 w-65 h-full rounded-xl">
      <img
        className="w-full h-full object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1773332585698-cba3c91b73e4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <CardsContent />
    </div>
  );
};

export default Cards;
