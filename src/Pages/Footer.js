import React from "react";
import YT from '../assets/youtube.png';
import Linked from '../assets/Linked.png';
import { Container, Row, Col } from 'react-bootstrap';


const FooterComponent = () => {
    return (
      <footer className="custom-footer">
        <Container>
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p><a href="/about">Learn more about SpotQuest</a></p>
              <p><a href="/how-it-works">How it works?</a></p>
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <p className="mb-0">© 2024 SpotQuest</p>
            </Col>
            <Col md={4} className="social-icons">
              <a href="https://www.linkedin.com"><img src={Linked} alt="LinkedIn" /></a>
              <a href="https://www.youtube.com"><img src={YT} alt="YouTube" /></a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };

  
export default FooterComponent;