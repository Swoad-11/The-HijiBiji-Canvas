import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import './Home.css';
import cover from '../../images/hijibiji1.png'


const Home = () => {
    return (
        <div>
            <Container className='home-container align-items-center'>
                <Row>
                    <Col><img className='mx-auto' src={cover} alt="" /></Col>
                    <Col className='text-center'>
                        <div>
                            <h1 className='title'>The HijiBiji Canvas</h1>
                            <p className='description'>
                                Here you will find digital illustrations, pencil sketches,canvas paintings and more!
                            </p>
                            <Button className='btn'>
                                <Nav.Link className='btn-text'><span>Our Services</span></Nav.Link>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;