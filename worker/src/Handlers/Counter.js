const name = process.env.NAME;

class Counter {
    static handle(sender, message) {
        const timeout = Math.random() * 750;

        setTimeout(() => {
            console.log(`${ name } received ${ message.counter } from the sorter`);
            sender.send(JSON.stringify({stuff: true}));
        }, timeout);
    }
}

module.exports = Counter;
