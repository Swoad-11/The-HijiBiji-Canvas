import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import './Home.css';
import cover from '../../images/hijibiji1.png'
import { LinkContainer } from 'react-router-bootstrap';


const Home = () => {
    return (
        <div>
            <Container className='home-container'>
                <Row className='home-row'>
                    <Col><img className='mx-auto home-img' src={cover} alt="" /></Col>
                    <Col className='text-center'>
                        <div>
                            <h1 className='title'>The HijiBiji Canvas</h1>
                            <p className='description'>
                                Here you will find digital illustrations, pencil sketches,canvas paintings and more!
                            </p>
                            <Button className='btn'>
                                <LinkContainer to="/service">
                                    <Nav.Link className='btn-text'><span>Our Services</span></Nav.Link>
                                </LinkContainer>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;