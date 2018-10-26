const Sender = require(`./Sender`);
const Log = require(`./Utils/Logger`);
const zmq = require(`zeromq`);
const zmqPort = process.env.ZMQ_PORT;
const Reciever = require(`./Reciever`);
const name = process.env.NAME;
const socket = zmq.socket(`rep`);

const sender = new Sender(socket);
new Reciever(socket, sender);
socket.bind(`tcp://*:${ zmqPort }`, () => {
    setTimeout(() => {
    Log.debug(`${ name } has gotten a connection`);
    sender.send(`connection`, JSON.stringify({status: `I am up and running, I am ${ name }`}));
    }, 200);
});
