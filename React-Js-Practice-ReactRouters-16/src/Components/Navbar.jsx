import React from "react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const previouspage = () => {
    navigate(-1);
  };
   const nextPage = () => {
    navigate(+1);
  };
  return (
    <>
      <ul className="flex flex-row p-3 gap-10 justify-center bg-red-500">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/privacypolicy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li className="flex flex-row gap-5">
          <button onClick={previouspage}> Back </button>
          <button onClick={nextPage}> Next </button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
