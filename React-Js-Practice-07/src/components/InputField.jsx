import React, { useState } from "react";

const InputField = (e) => {
  const [InputField, setInputField] = useState("Huzaif");

  const inputClick = (e) => {
    e.preventDefault();
    console.log("HELLO");
  };
  return (
    <>
      <div className="text-white text-5xl font-bold my-10">
        <hr />
        Practice Set 7
      </div>

      <form onSubmit={inputClick} className="flex flex-col text-white">
        <input className="border py-5 px-5 bg-neutral-700 font-bold text-4xl" />
        {InputField}
        <button className="my-6 border bg-red-500 py-3 px-3 text-white">
          Click ME
        </button>
      </form>
    </>
  );
};

export default InputField;
