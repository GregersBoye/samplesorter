const socketPort = process.env.SOCKET_PORT;
const zmqPort = process.env.ZMQ_PORT;
const io = require(`socket.io`)();
const SocketListener = require(`./Listeners/SocketListener`);
const Log = require(`./Utils/Logger`);

const zmq = require(`zeromq`);
const requester = zmq.socket(`req`);
const workers = [`worker_1`, `worker_2`, `worker_3`];

Log.debug(`debug`);
Log.info(`info`);
Log.error(`error`);
Log.warning(`warning`);

workers.forEach((worker) => {
    Log.debug(`connecting to ${ worker }`);
    requester.connect(`tcp://${ worker }:${ zmqPort }`);
});

for (let i = 0; i <= 100; i++) {
    const message = JSON.stringify({topic: `counter`, payload: {counter: i}});
    Log.debug(`sending message ${ message }`);
    requester.send(message);
}

//
requester.on(`message`, (message) => {
    Log.debug(message.toString());
});

new SocketListener(io, socketPort);
