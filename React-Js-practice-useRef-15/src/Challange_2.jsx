import React from "react";
import { useState, useEffect, useRef } from "react";

const Challange_2 = () => {
  const [inputText, setInputText] = useState("");
  const [searching, setSearching] = useState("");
  const [boolean, setboolean] = useState(false);
  const textFocus = useRef(null);
  const searchingInterval = useRef(null);

  useEffect(() => {
    textFocus.current.focus();
  }, []);

  useEffect(() => {
    if (inputText) {
      searchingInterval.current = setTimeout(() => {
        setSearching("Searching...");
        setboolean(true);
      }, 500);
    }
    return () => {
      clearInterval(searchingInterval.current);
      setSearching("");
      setboolean(false);
    };
  }, [inputText]);

  return (
    <div>
      <input
        ref={textFocus}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
        type="text"
      />

      {boolean && <h3>{searching}</h3>}
    </div>
  );
};

export default Challange_2;
