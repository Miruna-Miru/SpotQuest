import React from 'react';
import NavbarComponent from './NavBar';
import Footer from './Footer'; // Adjust the path as needed
import { Container, Form, Button } from 'react-bootstrap';
import Logo from '../assets/Logo.png';
import '../Css/Login.css'; // Create and style this as needed

const Login = () => {
    return (
        <>
            <NavbarComponent />
            <Container className="d-flex align-items-center justify-content-between my-5">
                <div className="logo-container">
                    <center>
                    <img src={Logo} alt="Logo" className="logo" />
                    </center>
                    
                </div>
                <div className="login-form-container">
                    <h2 className="text-center mb-4">Login</h2>
                    <br/>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-4">
                            Login
                        </Button>
                    </Form>
                    <div className="text-center mt-3">
                        <p>New user? <a href="/signup">Create an account</a></p>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Login;
