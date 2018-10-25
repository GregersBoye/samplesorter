const Connection = require(`./../Handlers/Socket/Connection`);
const Message = require(`./../Handlers/Socket/Message`);
const Events = require(`./../Enums/Events`);
const Log = require(`./../Utils/Logger`);

class SocketListener {
    /**
     * @param {Socket} io
     * @param {Number} port
     */
    constructor(io, port) {
        Log.info(`Listening for socket-connections on port ${ port }`);
        io.on(Events.Socket.CONNECTION, (socket) => {
            new Connection(socket);

            socket.on(Events.Socket.MESSAGE, (message) => {
                new Message(message);
            });
        });

        io.listen(port);
    }
}

module.exports = SocketListener;
