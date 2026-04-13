import { useState } from "react";
import Connection from "./Connection";

const App = () => {
  const [room, setRoom] = useState("General");
  const [show, setShow] = useState(false);
  const [serverURL, setServerURL] = useState("https:/Acedynamics.com/about");

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
      {show && (
        <>
          <label htmlFor="url">Server URL:</label>
          <br />
          <input
            value={serverURL}
            type="text"
            onChange={(e) => {
              setServerURL(e.target.value);
            }}
            placeholder="Server URL"
            style={{ padding: "10px" }}
          />
          <h1>WELCOME TO {room}</h1>
        </>
      )}
      <Connection roomId={room} serverURL={serverURL} />
    </>
  );
};

export default App;
