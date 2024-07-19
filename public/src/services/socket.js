// src/services/socket.js

import WebSocketClient from './WebSocketClient';

const socketUrl = 'ws://54.173.41.171:30970/ws';
const socketClient = new WebSocketClient(socketUrl);

export const initSocket = () => {
    socketClient.connect();
};

export const sendMessage = (message) => {
    socketClient.send(message);
};
