import Logo from '../assets/Logo.png';
import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Css/Home.css';

const NavbarComponent = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" >
            <img
              src={Logo} 
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <span className="ms-2">SpotQuest</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto custom-nav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#explore">Explore</Nav.Link>
              <Link to="/login">
                <Button variant="outline-light" className="ms-3">Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavbarComponent;
