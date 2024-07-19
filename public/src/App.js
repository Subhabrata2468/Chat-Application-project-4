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
}
