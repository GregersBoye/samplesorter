class Connection {
    /**
     *
     * @param {Socket} socket
     */
    constructor(socket) {
        this.socket = socket;
        console.log(`A client connected`);
    }
}

module.exports = Connection;
