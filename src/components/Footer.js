import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_wrapper">
                <Container>
                    <Row>
                        <Col> 
                            <h2> 2020 &copy; A.Petrechko </h2>
                            <h5> All rights reserved </h5> 
                        </Col>
                        <Col> 
                            <p> Корисні посилання </p>
                        </Col>
                        <Col>
                            <p> Контакти </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
