import React, { useEffect, useRef, useState } from "react";

const challenge_1 = () => {
  const [timer, setTimer] = useState(0);
  const [boolean, setboolean] = useState(false);
  const save = useRef(null);

  useEffect(() => {
    if (boolean) {
      save.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(save.current);
    };
  }, [boolean]);

  return (
    <div>
      <h1>Timer : {timer}</h1>
      <button
        onClick={() => {
          setboolean(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setboolean(false);
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          setTimer(0);
          setboolean(false);
          clearInterval(save.current);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default challenge_1;
