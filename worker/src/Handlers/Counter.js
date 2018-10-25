const name = process.env.NAME;
const Log = require(`./../Utils/Logger`);
class Counter {
    static handle(sender, message) {
        const timeout = Math.random() * 750;

        setTimeout(() => {
            Log.info(`${ name } received ${ message.counter } from the sorter`);
            sender.send(JSON.stringify({stuff: true}));
        }, timeout);
    }
}

module.exports = Counter;
