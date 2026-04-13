import { useState, useEffect } from "react";

const Connection = ({ roomId }) => {
  const [serverURL, setServerURL] = useState("https:/Acedynamics.com/");

  function CreateConnection(roomId, serverURL) {
    return {
      connect() {
        console.log(
          '✅ Connecting to "' + roomId + '" room at ' + serverURL + "...",
        );
      },
      disconnect() {
        console.log(
          '❌ Disconnected from "' + roomId + '" room at ' + serverURL,
        );
      },
    };
  }

  useEffect(() => {
    const newConnection = CreateConnection(roomId, serverURL);
    newConnection.connect();
    return () => {
      newConnection.disconnect();
    };
  }, [roomId, serverURL]);

  return (
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
      <h1>WELCOME TO {roomId}</h1>
    </>
  );
};

export default Connection;
