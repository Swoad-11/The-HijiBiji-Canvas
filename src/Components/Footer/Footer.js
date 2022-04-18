import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <div className='footer'>
            <Container>
                <Row className="pb-2 justify-content-baseline">
                    <Col sm={8}>
                        <Container>
                            <Row>
                                <Col sm={6}><div className='link d-flex justify-content-start'>
                                    <p className='fs-5'>Social Media Links:</p>
                                    <a className='social px-2 fs-5' href="https://www.facebook.com/dHJBJcanvas"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                                    <a className='social fs-5' href="https://www.instagram.com/thehijibijicanvas/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                                </div></Col>
                                <Col sm={6}><h4 className='title text-center'>The HijiBiji Canvas</h4></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={4}>
                        <p className='pb-4 text-black text-end'><small>&copy; By The HijiBiji Canvas {year}</small></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;