
import React from 'react';
import { Col, Container, Nav, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import cover from '../../images/hijibiji1.png';

const Intro = () => {
    return (
        <div>
            <Container className='home-container my-4'>
                <Row className='home-row'>
                    <Col><img className='mx-auto home-img' src={cover} alt="" /></Col>
                    <Col className='text-center'>
                        <div>
                            <h1 className='title'>The HijiBiji Canvas</h1>
                            <p className='description'>
                                Here you will find digital illustrations, pencil sketches,canvas paintings and more!
                            </p>
                            <Button className='btn'>
                                <LinkContainer to="/about">
                                    <Nav.Link className='btn-text'><span>About</span></Nav.Link>
                                </LinkContainer>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr className='w-50 mx-auto' />
        </div>
    );
};

export default Intro;