import React, {Component} from 'react';
import Table from './Components/Table';
import io from 'socket.io-client';
let connection;
class App extends Component {
constructor(){
    super();

    connection = io.connect('localhost:5000', {transports: ['websocket', 'xhr-polling']});
    console.log(`connection opened`)
}

    sendMessage(){
        console.log('emitMessage')
        connection.emit('message', 'The message is clear!')
    }

    render() {
        return (
            <div className="container">
                <Table />


                <button onClick={this.sendMessage}>Send message</button>
            </div>
        );
    }
}

export default App;