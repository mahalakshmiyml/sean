import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menubar = () => {
  return (
    <div className="sticky-top">
      <Navbar
        id="navbar"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light "
      >
        <Container>
          <Navbar.Brand className="text-secondary" href="/">
            SEAN ALEXANDERIA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="City" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">
                  Benagaluru
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Chennai</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Hyderabad
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/why-sean">Why Us</Nav.Link>
              <Nav.Link href="/our-services">Our Services</Nav.Link>
              <Nav.Link href="/our-process">How it Works</Nav.Link>
              <Nav.Link href="/our-projects">Our Projects</Nav.Link>
              <Nav.Link href="/packages">Cost Estimator</Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Blogs & Articles
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Material Estimator
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Floor Plans
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Floor Plans
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <Button className="bg-secondary">
                  Let's Build <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </Button>
              </Nav.Link>
              <Nav.Link href="#deets">
                <a
                  href="tel:9148584723"
                  className="text-decoration-none text-dark"
                >
                  <FontAwesomeIcon icon={['fas', 'phone']} /> +91 91485 84723
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
