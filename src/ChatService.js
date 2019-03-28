class ChatService {
    constructor(host, onMessageCallback) {
        console.log("using host:", host)
        this.host = host;
        this.onMessageCallback = onMessageCallback
        this.connect()
    }
    send(email, messageStr) {
        var message = {
            email: email,
            msg: messageStr
        };

        var messageJSON = JSON.stringify(message);
        this.ws.send(messageJSON + "\n");
    }
    onClose() {
        console.log("connection closed")
        this.connect()
    }
    connect() {
        console.log("attempting to connect")
        this.ws = new WebSocket(this.host);
        this.ws.onmessage = this.onMessageCallback
        this.ws.onclose = this.onClose.bind(this)
    }
}

export default ChatService;
