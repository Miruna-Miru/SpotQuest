import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import NavbarComponent from './NavBar'; 
import FooterComponent from './Footer'; 

const ComponentDetail = ({ imageSources, descriptions }) => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleShow = (content) => {
    setModalContent(content);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <NavbarComponent />
      <Container className="my-4">
        {imageSources.map((src, index) => (
          <Row key={index} className="mb-4 align-items-center">
            <Col md={4}>
              <img
                src={src}
                alt={`Card ${index + 1}`}
                className="img-fluid"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </Col>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>{descriptions[index].title}</Card.Title>
                  <Card.Text>{descriptions[index].content}</Card.Text>
                  <Button
                    variant="success"
                    onClick={() => handleShow(descriptions[index])}
                    style={{ borderRadius: '50px' }}
                  >
                    Show Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>

      {/* Modal for showing additional details */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent.details}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <FooterComponent />
    </>
  );
};

export default ComponentDetail;
