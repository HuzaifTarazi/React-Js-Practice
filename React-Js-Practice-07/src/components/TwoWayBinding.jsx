import React, { useState } from "react";

const TwoWayBinding = () => {
  const [value, setvalue] = useState("");

  const submitEvent = (e) => {
    e.preventDefault();

    console.log("Form Submitted By " + value);
  };

  const onChangeSys = (e) => {
    const storeValue = e.target.value;
    setvalue(storeValue.trim().toUpperCase());
  };

  return (
    <>
      <div className="text-white text-5xl font-bold my-10">
        <hr />
        Practice Set 8
      </div>

      <form onSubmit={submitEvent} className="flex flex-col text-white">
        <input
          onChange={onChangeSys}
          value={value}
          type="text"
          placeholder="Enter Username.."
          className="border py-5 px-5 bg-neutral-700 font-bold text-4xl"
        />

        <button
          type="submit"
          className="my-6 border bg-red-500 py-3 px-3 text-white"
        >
          Click ME
        </button>
      </form>
    </>
  );
};

export default TwoWayBinding;
