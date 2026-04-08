import React from "react";
import RoutesComponent from "./pages/Routes/RouteComponent";
import { Link } from "react-router";

const App = () => {
  return (
    <>
      <div className="flex justify-between py-3 px-3 flex-row bg-emerald-500">
        <h2>ROUTE TEMP</h2>
        <ul className="flex flex-row gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
        </ul>
      </div>
      <RoutesComponent />
    </>
  );
};

export default App;
