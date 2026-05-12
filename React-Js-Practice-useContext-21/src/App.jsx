import React from "react";
import NameProvider from "./context/NameProvider";
import First from "./components/first";
import Third from "./components/Third";

const App = () => {
  return (
    <div>
      <First />
      <Third />
    </div>
  );
};

export default App;
