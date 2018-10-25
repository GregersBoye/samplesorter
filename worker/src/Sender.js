const name = process.env.NAME;

class Sender {
    constructor(connection) {
        this.connection = connection;
    }

    send(topic, message) {
        const dataObject = {
            topic: topic,
            payload: message,
            sender: name
        };

        this.connection.send(this.wrapPayload(dataObject));
    }

    wrapPayload(payload) {
        return JSON.stringify(payload);
    }
}

module.exports = Sender;
