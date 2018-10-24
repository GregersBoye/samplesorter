const socketPort = 5000;
const io = require(`socket.io`)();
const SocketListener = require(`./Listeners/SocketListener`);

new SocketListener(io, socketPort);




//

