import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <ul className="flex flex-row gap-4 p-4 bg-cyan-600 justify-center items-center font-semibold text-white">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li><Link to="about">About</Link></li>
      <li><Link to="/">Contact</Link></li>
      <li><Link to="/">Privacy Policy</Link></li>
      <li><Link to="/">Product</Link> Policy</li>
    </ul>
  );
};

export default Navbar;
