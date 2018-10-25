const socketPort = process.env.SOCKET_PORT;
const zmqPort = process.env.ZMQ_PORT;
const io = require(`socket.io`)();
const SocketListener = require(`./Listeners/SocketListener`);


new SocketListener(io, socketPort);

const zmq = require(`zeromq`)
    , requester = zmq.socket(`req`);
const workers = [`worker_1`, `worker_2`, `worker_3`];

workers.forEach((worker) => {
    requester.connect(`tcp://${ worker }:${ zmqPort }`);
});

for (let i = 0; i <= 100; i++) {
    const message = JSON.stringify({topic: `counter`, payload: {counter: i}});
    //        console.log(`sending message ${message}`);
    requester.send(message);
}

//
requester.on(`message`, (message) => {

});
