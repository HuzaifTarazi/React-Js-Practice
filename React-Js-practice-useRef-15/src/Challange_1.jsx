import React from "react";
import { useEffect, useState, useRef } from "react";

const Challange_1 = () => {
  const [timer, setTimer] = useState(0);
  const [boolean, setBoolean] = useState(false);
  const refNumber = useRef(null);

  useEffect(() => {
    if (boolean) {
      refNumber.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(refNumber.current);
    };
  }, [boolean]);

  return (
    <div>
      <h1>Challenge 1</h1>
      <h2>Timer: {timer}</h2>
      <button
        onClick={() => {
          setBoolean(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setBoolean(false);
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          setBoolean(false);
          setTimer((prev) => (prev = 0));
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default Challange_1;
