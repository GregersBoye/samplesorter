const Log = require('./../Utils/Logger');
const Enums = require('./../Enums/Events');
const Connection = require('./../Handlers/ZeroMq/Connection');

class ZmqListener {
    constructor(zmqIo, socket) {
        this.socket = socket;
        this.zmqIo = zmqIo;

        Log.info('Listening for messages on ZeroMq');

        this.zmqIo.on(`message`, (rawMessage) => {
            const message = this.convertMessage(rawMessage);

            if(!this.validateMessage(message)){
                Log.error('message was invalid', message);
                return;
            }

            if(!this.topicExists(message.topic)){
                Log.error('message with invalid topic was recieved', message);
                return;
            }

            return this.events[message.topic](message.payload, message.sender);

        });
    }

    get events() {
        return {
            [Enums.ZeroMQ.incoming.CONNECTION] : (payload, sender) => {
                console.log(Connection);
                // new Connection(payload, sender, this.socket);
            }

        }
    }

    topicExists(topic){
        return this.events.hasOwnProperty(topic);
    }

    convertMessage(rawMessage) {
        const message = rawMessage.toString();

        return JSON.parse(message);
    }

    validateMessage(message) {
        if (typeof message.sender === `undefined`) {
            return false;
        }

        if (typeof message.topic === `undefined`) {
            return false;
        }

        if (typeof message.payload === `undefined`) {
            return false;
        }

        return true;
    }
}

module.exports = ZmqListener;
