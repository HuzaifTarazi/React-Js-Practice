import React from "react";
import { Route, Routes } from "react-router";

import Products from "../Products";
import About from "../About";
import Home from "../Home";
import Mens from "../Mens";
import Women from "../women";
import NotFound from "../NotFound";
import PrivacyPolicy from "../PrivacyPolicy";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/:id" element={<PrivacyPolicy />} />
      <Route path="/product" element={<Products />}>
        <Route path="mens" element={<Mens />} />
        <Route path="women" element={<Women />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
