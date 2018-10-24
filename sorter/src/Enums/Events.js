class Events {
    /**
     * @return {{CONNECTION: string, MESSAGE: string, STATUS: string}}
     */
    static get Socket() {
        return {
            CONNECTION: `connection`,
            MESSAGE: `message`,
            STATUS: `status`
        };
    }

    static get ZeroMQ() {
        return {};
    }
}

module.exports = Events;
