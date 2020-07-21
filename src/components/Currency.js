import React, { Component } from 'react';
import './currency.css';
import { Table } from 'react-bootstrap';

export default class Currency extends Component {
    render() {
        return (
            <div className="card_wrapper">
                <h5> Валюта <span> {this.props.name} </span> </h5>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Купівля</th>
                            <th>Продаж</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {this.props.buy} </td>
                            <td> {this.props.sale} </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
