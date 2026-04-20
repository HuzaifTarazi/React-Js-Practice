import React from "react";
import { Link, Outlet } from "react-router";

const AboutLayout = () => {
  return (
    <>
      {" "}
      <ul className="flex flex-row justify-center items-center gap-3 my-3">
        <li>
          <Link
            to="aboutchild1"
            className="bg-orange-400 p-2 rounded shadow-md text-white active:bg-orange-500"
          >
            ABOUT CHILD 1
          </Link>
        </li>
        <li>
          <Link
            to="aboutchild2"
            className="bg-orange-400 p-2 rounded shadow-md text-white active:bg-orange-500"
          >
            ABOUT CHILD 2
          </Link>
        </li>
      </ul>{" "}
      <Outlet />
    </>
  );
};

export default AboutLayout;
