import React from "react";
import { Link, Outlet } from "react-router";

const Products = () => {
  return (
    <>
      {" "}
      <div className="flex justify-center items-center gap-4 py-3">
        <Link
          className="bg-red-500 py-1 px-4 rounded active:bg-red-600 text-white"
          to="/product/mens"
        >
          Mens
        </Link>
        <Link
          className="bg-red-500 py-1 px-4 rounded active:bg-red-600 text-white"
          to="/product/women"
        >
          Women
        </Link>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className=" h-44 w-1/2 bg-red-400 font-bold text-4xl text-white flex justify-center items-center rounded-2xl shadow-2xl outline-none">
          I AM Products BOX
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Products;
