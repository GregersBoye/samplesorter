const Sender = require(`./Sender`);
const Log = require(`./Utils/Logger`);
const zmq = require(`zeromq`);
const zmqPort = process.env.ZMQ_PORT;
const Reciever = require(`./Reciever`);
const name = process.env.NAME;
const socket = zmq.socket(`rep`);
socket.bind(`tcp://*:${ zmqPort }`, () => {
    Log.debug(`${ name } has gotten a connection`);
    socket.send(JSON.stringify({status: `I am up and running, I am ${ name }`}));
});
const sender = new Sender(socket);
new Reciever(socket, sender);
