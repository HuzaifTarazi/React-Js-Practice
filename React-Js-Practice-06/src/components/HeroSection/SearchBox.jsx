import React from "react";
import { RiSearch2Line } from "@remixicon/react";
const SearchBox = () => {
  return (

    <div className="relative top-0 w-220 flex justify-between items-center group">
      <input
        type="text"
        placeholder="Search Tickets..."
        className=" py-4 px-4 w-full rounded-full bg-gray-200 text-black focus:outline-none  focus:ring-2 ring-emerald-500 duration-200 ease-in-out"
      />
      <span className="relative right-13 py-3 px-3 rounded-full text-white bg-black group-focus-within:bg-emerald-500  transition-colors duration-200 ease-in-out">
        <RiSearch2Line />
      </span>
    </div>
  );
};

export default SearchBox;
