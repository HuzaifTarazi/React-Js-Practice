import { useState } from "react";
import Connection from "./Connection.jsx";

const App = () => {
  const [room, setRoom] = useState("General");
  const [show, setShow] = useState(false);

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
    </>
  );
};

export default App;
