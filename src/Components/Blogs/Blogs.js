import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div class="card my-4">
                        <h5 class="card-header text-center">Question-1</h5>
                        <div class="card-body">
                            <h5 class="card-title">Difference between authorization and authentication.</h5>
                            <p class="card-text">Authentication is when a user provides their information/credentials on a website to log in and get access to their account, which means they can make changes to their account. <br />
                                Authorization is what gives someone access to modify someone's account, get access to certain files, chats, and pretty much anything you want.</p>

                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="card my-4">
                        <h5 class="card-header text-center">Question-2</h5>
                        <div class="card-body">
                            <h5 class="card-title">Why are you using firebase? What other options do you have to implement authentication?</h5>
                            <p class="card-text">Firebase is a JSON document store (database) which allows for storing documents (stuff like JSON). It's really easy to set up an account and have a globally visible database. It's fantastic for prototyping mobile apps since it's so quick to get up and running. It's not a high performance database, nor the cheapest service, but it is one of the easiest. It's free for very low volume usage.<br />
                                Five common options we can implement in authentication, these are:<br /> 1) Password-based authentication<br /> 2) Multi-factor authentication<br /> 3) Certificate-based authentication<br /> 4) Biometric authentication<br /> 5) Token-based authentication
                            </p>

                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="card my-4">
                        <h5 class="card-header text-center">Question-3</h5>
                        <div class="card-body">
                            <h5 class="card-title">What other services does firebase provide other than authentication?</h5>
                            <p class="card-text">Other than authentication, firebase provide the following services:<br />Realtime database, Hosting, Test Lab, Notifications.</p>

                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;