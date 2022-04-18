import swoad from '../../images/toufiq.jpg';
import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';


const About = () => {
    return (
        <div>
            <Card className='mx-auto' style={{ width: '21rem' }}>
                <Card.Img variant="top" src={swoad} />
                <Card.Body>
                    <Card.Title className='title text-center'>Toufiq Islam Swoad</Card.Title>
                    <Card.Text>
                        I consider myself a proactive, responsible and result-oriented person. I'm quietly confident, naturally curious, and perpetually working on improving myself. I'm currently working on Web Development and my goal is to learn about block-chaining and Web 3.0 <br />
                        If I need to define myself in one sentence that would be a life long learner, an art enthusiast, a football fanatic, tech obsessed and a dreamer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;