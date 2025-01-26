import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onerror = (e) => {
      console.log("Error: ", e);
    };
    ws.onopen = () => {
      console.log("Connected to server");
    };
    ws.onclose = () => {
      console.log("Disconnected from server");
    };
    ws.onmessage = (e) => {
      alert(e.data);
      console.log("Message from server: ", e.data);
    };
  }, []);
  function sendMessage() {
    const message = inputRef.current?.value;
    if (!socket) {
      return;
    }
    if (message !== undefined) {
      socket.send(message);
    }
    console.log("Sending message...");
  }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
