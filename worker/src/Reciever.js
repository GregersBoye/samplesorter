const Counter = require(`./Handlers/Counter`);

class Reciever {
    constructor(connection) {
        this.connection = connection;

        this.connection.on(`message`, (rawMessage) => {
            const {topic, payload} = Reciever.convertMessage(rawMessage);

            this.handlers[topic](payload);
        });
    }

    static convertMessage(rawMessage) {
        const message = JSON.parse(rawMessage.toString());
        if (typeof message.topic === `undefined` || typeof message.payload === `undefined`) {
            throw new Error(`Message is incomplete`);
        }

        return message;
    }

    get handlers() {
        return {
            [`counter`]: (message) => {
                Counter.handle(this.connection, message);
            }
        };
    }
}

module.exports = Reciever;
