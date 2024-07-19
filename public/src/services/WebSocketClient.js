class WebSocketClient {
    constructor(url) {
        this.url = url;
        this.connection = null;
    }

    connect() {
        this.connection = new WebSocket(this.url);

        this.connection.onopen = () => {
            console.log('WebSocket connection opened');
        };

        this.connection.onmessage = (message) => {
            console.log('WebSocket message received:', message.data);
        };

        this.connection.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        this.connection.onclose = () => {
            console.log('WebSocket connection closed');
        };
    }

    send(message) {
        if (this.connection && this.connection.readyState === WebSocket.OPEN) {
            this.connection.send(message);
        } else {
            console.error('WebSocket is not open. ReadyState:', this.connection.readyState);
        }
    }
}

// Initialize WebSocketClient with the URL from environment variables
const webSocketUrl = process.env.REACT_APP_LOCALHOST_KEY;
const webSocketClient = new WebSocketClient(webSocketUrl);

// Connect to the WebSocket server
webSocketClient.connect();

export default webSocketClient;
