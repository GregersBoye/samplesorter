const Sender = require(`./Sender`);

const zmq = require(`zeromq`);
const zmqPort = process.env.ZMQ_PORT;
const Reciever = require(`./Reciever`);
const name = process.env.NAME;
console.log(process.env.SOCKET_PORT);

const replier = zmq.socket(`rep`);
replier.bind(`tcp://*:${ zmqPort }`, (error) => {
    console.log(`${ name } has gotten a connection`);
    replier.send(JSON.stringify({status: `I am up and running, I am ${ name }`}));
});

new Reciever(replier);
