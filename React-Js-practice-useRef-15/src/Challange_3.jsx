import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Challange_3 = () => {
  const [seconds, setSeconds] = useState(0);
  const [boolean, setBoolean] = useState(false);

  const saveSeconds = useRef(null);
  const num = useRef(0);
  const renders = useRef(1);

  useEffect(() => {
    if (boolean) {
      saveSeconds.current = setInterval(() => {
        setSeconds((prev) => {
          num.current = prev;
          return prev + 1;
        });
      }, 1000);
    }
    console.log("Component Mounted: ", seconds);
    return () => {
      renders.current += 1;
      clearInterval(saveSeconds.current);
      console.log("Component Unmounted: ", renders);
    };
  }, [boolean]);

  renders.current += 1;
  return (
    <div>
      <h1>Seconds: {seconds}</h1>
      <h1>Previous Second: {num.current}</h1>
      <h1>Render Count: {renders.current}</h1>

      <button
        onClick={() => {
          setBoolean(true);
        }}
      >
        Start
      </button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  );
};

export default Challange_3;
