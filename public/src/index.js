import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { initSocket } from './services/socket';

// Initialize WebSocket connection
initSocket();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
