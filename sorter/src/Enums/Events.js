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

    /**
     *
     * @return {{incoming: {CONNECTION: string}, outgoing: {}}}
     * @constructor
     */
    static get ZeroMQ() {
        return {
            incoming: {
                CONNECTION: `connection`
            },
            outgoing: {

            }
        };
    }
}

module.exports = Events;
