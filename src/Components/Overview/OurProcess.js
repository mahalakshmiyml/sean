import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const OurProcess = () => {
  return (
    <div className="py-md-3 bg-light">
      <Container>
        <Row className="justify-content-center">
          <h2 className="text-center text-secondary">How it Works</h2>
          <p className="text-muted text-center">Our steps are simple and easy to understand: Plan - Build - Track - Settle in.</p>
        <Col md={10} className="py-3 text-center">
            <p> <strong>Step 1 <FontAwesomeIcon icon={['fas', 'arrow-right']}>
              </FontAwesomeIcon> <span className="text-secondary">Raise a Request</span> </strong> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
              <p> <strong>Step 2 <FontAwesomeIcon icon={['fas', 'arrow-right']}>
              </FontAwesomeIcon> <span className="text-secondary">Meet Our Expert</span> </strong> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
              <p> <strong>Step 3 <FontAwesomeIcon icon={['fas', 'arrow-right']}>
              </FontAwesomeIcon> <span className="text-secondary">Book with us</span> </strong> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
              <p> <strong>Step 4 <FontAwesomeIcon icon={['fas', 'arrow-right']}>
              </FontAwesomeIcon> <span className="text-secondary">Review Design</span> </strong> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
              <p> <strong>Step 5 <FontAwesomeIcon icon={['fas', 'arrow-right']}>
              </FontAwesomeIcon> <span className="text-secondary">Track & Transact</span> </strong> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
              <p> <strong>Step 6 <FontAwesomeIcon icon={['fas', 'arrow-right']}>
              </FontAwesomeIcon> <span className="text-secondary">Settle In</span> </strong> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurProcess;
