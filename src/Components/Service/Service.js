import React from 'react';
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import img1 from '../../images/Byomkesh.png'
import img2 from '../../images/img5.jpg'
import img3 from '../../images/img4.jpg'
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate();

    const navigateToServiceDetail = () => {
        navigate('/servicedetail');
    }
    return (
        <div>
            <h2 className='description text-center'>Our Services</h2>
            <Container>
                <Row>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Illustration</Card.Title>
                            <Card.Text>
                                Digital arts like above sample.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Price Range: 300-500 BDT</ListGroupItem>
                            <ListGroupItem>Rating: 5/5</ListGroupItem>
                        </ListGroup>
                        <Button onClick={() => navigateToServiceDetail()} variant="btn btn-text" style={{ width: '18rem' }}>Checkout</Button>
                    </Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Painting</Card.Title>
                            <Card.Text>
                                Paintings like above sample.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Price Range: 500-800 BDT</ListGroupItem>
                            <ListGroupItem>Rating: 4.5/5</ListGroupItem>
                        </ListGroup>
                        <Button variant="btn btn-text" style={{ width: '18rem' }}>Checkout</Button>
                    </Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Sketch</Card.Title>
                            <Card.Text>
                                Sketches like above sample.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Price Range: 200-300 BDT</ListGroupItem>
                            <ListGroupItem>Rating: 4.75/5</ListGroupItem>
                        </ListGroup>
                        <Button variant="btn btn-text" style={{ width: '18rem' }}>Checkout</Button>
                    </Card></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;