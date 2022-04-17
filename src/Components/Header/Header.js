import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/home">
                        <NavbarBrand to="/">The HijiBiji Canvas</NavbarBrand>
                    </LinkContainer>
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
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;