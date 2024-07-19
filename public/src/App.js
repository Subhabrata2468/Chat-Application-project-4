import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { sendMessage } from './services/socket';

export default function App() {
  const handleClick = () => {
    sendMessage('Hello, WebSocket!');
  };

  return (
    <div>
      <h1>WebSocket Example</h1>
      <button onClick={handleClick}>Send Message</button>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
