import { useEffect, useState } from "react";
import Connection from "./Connection.jsx";
import Challenge_1 from "./challenge_1.jsx";

const App = () => {
  const [room, setRoom] = useState("General");
  const [show, setShow] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function pointer(e) {
      setPointer({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", pointer);
    return () => {
      window.removeEventListener("pointermove", pointer);
    };
  }, []);

  return (
    <>
      <h3>Example - 1</h3>
      <select
        value={room}
        onChange={(e) => {
          setRoom(e.target.value);
        }}
        name=""
        id=""
        style={{ fontSize: "16px", padding: "5px" }}
      >
        <option value="General">General</option>
        <option value="Music">Music</option>
        <option value="Travel">Travel</option>
      </select>
      <br />
      <br />
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Close Chat" : "Open Chat"}
      </button>
      <br /> <br />
      {show && <Connection roomId={room} />}
      <br />
      <hr />
      <Challenge_1 />
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${pointer.x}px, ${pointer.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
};

export default App;
