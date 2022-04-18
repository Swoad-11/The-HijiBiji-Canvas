import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to="/home">
                        <NavbarBrand to="/">The HijiBiji Canvas</NavbarBrand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-4">
                            <CustomLink to="/home">
                                <Nav.Link className="mx-2"><span>HOME</span></Nav.Link>
                            </CustomLink>
                            <CustomLink to="/banner">
                                <Nav.Link className="mx-2"><span>BANNER</span></Nav.Link>
                            </CustomLink>
                            <CustomLink to="/service">
                                <Nav.Link className="mx-2"><span>SERVICES</span></Nav.Link>
                            </CustomLink>
                            <CustomLink to="/blogs">
                                <Nav.Link className="mx-2"><span>BLOGS</span></Nav.Link>
                            </CustomLink>
                            <CustomLink to="/about">
                                <Nav.Link className="mx-2"><span>ABOUT</span></Nav.Link>
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {
                            user ?
                                <Nav.Link className='mx-2 text-light text-decoration-none' onClick={handleSignOut}><span>Sign Out</span></Nav.Link>
                                :
                                <LinkContainer to="/login">
                                    <Nav.Link className="mx-2 text-dark"><span>Login</span></Nav.Link>
                                </LinkContainer>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;