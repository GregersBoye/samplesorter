class Connection{

    /**
     *
     * @param {object} payload
     * @param {string} sender
     * @param {Socket} socket
     */
    constructor(payload, sender, socket){
        Log.debug(`A message was recieved from ${sender}`, payload);
    }
}