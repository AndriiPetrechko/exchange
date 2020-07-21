import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header_wrapper">
                <Container>
                    <h1> Exchange </h1>
                </Container>
            </div>
        )
    }
}
