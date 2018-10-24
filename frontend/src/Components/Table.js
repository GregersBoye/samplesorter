import React, {Component} from 'react';

class Table extends Component {
    render() {
        return (
            <table className="table is-striped">
                <TableHeader />
                <tbody>
                <tr>
                    <td>Charlie</td>
                    <td>Janitor</td>
                </tr>
                <tr>
                    <td>Mac</td>
                    <td>Bouncer</td>
                </tr>
                <tr>
                    <td>DiDi</td>
                    <td>Aspiring actress</td>
                </tr>
                <tr>
                    <td>Dennis</td>
                    <td>Bartender</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Navn</th>
            <th>Stilling</th>
        </tr>
        </thead>
    );
};


export default Table;
