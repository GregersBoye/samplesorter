const name = process.env.NAME;
const Log = require(`./Utils/Logger`);

class Sender {
    constructor(connection) {
        this.connection = connection;
    }

    send(topic, message) {
        Log.info(`sending message with topic ${ topic }`);
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
