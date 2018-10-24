const Connection = require(`./../Handlers/Socket/Connection`);
const Message = require(`./../Handlers/Socket/Message`);
const Events = require(`./Enums/Events`);

class SocketListener {
    /**
     * @param {Socket} io
     * @param {Number} port
     */
    constructor(io, port) {
        io.listen(port);

        console.log(`Listening for socket-connections on port ${ port }`);
        io.on(Events.Socket.CONNECTION, (socket) => {
            new Connection(socket);

            socket.on(Events.Socket.MESSAGE, (message) => {
                new Message(message);
            });
        });
    }
}

module.exports = SocketListener;
