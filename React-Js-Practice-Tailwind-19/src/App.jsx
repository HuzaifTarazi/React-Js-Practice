import React from "react";

const App = () => {
  return (
    <>
      <div className="bg-gray-900 h-screen text-white flex items-center justify-center">
        <div className="bg-white text-black p-2 mx-10 w-88 flex flex-col gap-2 rounded  md:flex-row md:gap-8 md:min-w-xl">
          <img
            className="h-43 w-auto rounded object-fill md:h-auto md:w-60"
            src="https://images.pexels.com/photos/37290569/pexels-photo-37290569.jpeg"
            alt=""
          />
          <div className="">
            <h4 className="text-orange-400 font-bold text-shadow-md md:text-black md:font-normal md:text-shadow-none">
              Content
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nisi
              at ad rem provident ullam necessitatibus doloribus aliquid,
              maiores aspernatur!
            </p>
            <button className="bg-red-400 p-2 my-2 font-semibold text-white active:bg-red-600 hover:bg-red-500 rounded text-sm">BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
