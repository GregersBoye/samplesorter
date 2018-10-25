const Log = require(`./../../Utils/Logger`);

class Connection {
    /**
     *
     * @param {Socket} socket
     */
    constructor(socket) {
        this.socket = socket;
        Log.info(`A client connected`);
    }
}

module.exports = Connection;
