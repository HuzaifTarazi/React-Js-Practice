import React from "react";

const Navbarcontent = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">
          <a href="">Ticketist.</a>
        </p>
        <ul className="flex gap-10 ">
          <li>
            <a href="#">Browse Events</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a
              href="#"
              className="border-1  px-4 py-2 rounded-4xl hover:bg-gray-700  hover:text-white transition duration-200"
            >
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbarcontent;
