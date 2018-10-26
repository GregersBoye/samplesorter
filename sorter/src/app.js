const socketPort = process.env.SOCKET_PORT;
const zmqPort = process.env.ZMQ_PORT;
const io = require(`socket.io`)();
const SocketListener = require(`./Listeners/SocketListener`);
const ZmqListener = require('./Listeners/ZmqListener');

const Log = require(`./Utils/Logger`);

const zmq = require(`zeromq`);
const zmqIo = zmq.socket(`req`);
const workers = [`worker_1`, `worker_2`, `worker_3`];

Log.info(`Samplesorter sorter version 1.0.0`);

workers.forEach((worker) => {
    Log.info(`connecting to ${ worker }`);
    zmqIo.connect(`tcp://${ worker }:${ zmqPort }`);

});
setTimeout(() => {
for (let i = 0; i <= 5; i++) {
    const message = JSON.stringify({topic: `counter`, payload: {counter: i}});
    Log.debug(`sending message ${ message }`);
    zmqIo.send(message);
}
}, 500);
//

new ZmqListener(zmqIo, {stuff: true});

new SocketListener(zmqIo, socketPort);
