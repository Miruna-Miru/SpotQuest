import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../Css/Home.css'; 
import P1 from '../assets/P1.jpg';
import P2 from '../assets/P2.jpg';
import P3 from '../assets/P3.jpg';
import P4 from '../assets/P4.jpg';
import P5 from '../assets/P5.jpg';
import Intro from '../assets/Intro.mp4';
import FooterComponent from './Footer';
import NavbarComponent from './NavBar';







const Home = () => {
  const handleP1=()=>{
    window.location.href='/p1'

}
  return (
    <>
      <NavbarComponent />
      <div className="video-container">
        <video autoPlay muted loop className="video-bg">
          <source src={Intro} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>ADVENTURE WAITS</h1>
        </div>
      </div>
  

      <Container className="my-4">
      <center><h1>Look at the wonderful Destinations :)</h1></center>
        <Row className="justify-content-center">
          
          <br/>
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={P1} />
              <Card.Body>
                <Card.Text  onClick={handleP1}>
                  Explore the ancient city "Kadambavanam"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={P2} />
              <Card.Body>
                <Card.Text>
                  Explore the calmness of life with Ooty
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={P3} />
              <Card.Body>
                <Card.Text>
                Discover the rich culture and vibrant life of Madhura—where every street tells a story!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={P4} />
              <Card.Body>
                <Card.Text>
                Witness the breathtaking beauty of Idukki Dam
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={P5} />
              <Card.Body>
                <Card.Text>
                Thiruvananthapuram Zoo—an enchanting journey through nature!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <FooterComponent />
    </>
  );
};

export default Home;
