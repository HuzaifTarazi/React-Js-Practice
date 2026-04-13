import { useEffect } from "react";

const Connection = ({ roomId, serverURL }) => {
  console.log(roomId, serverURL);

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

  return <></>;
};

export default Connection;
