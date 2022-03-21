import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

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
          <Navbar.Brand className="text-secondary" href="#home">
            SEAN ALEXANDERIA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="City" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Benagaluru
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Chennai</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Hyderabad
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Our Projects</Nav.Link>
              <Nav.Link href="#pricing">Cost Estimator</Nav.Link>
              <Nav.Link href="#pricing">How it Works</Nav.Link>
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
                  Let's Build <i className="fas fa-arrow-right"></i>
                </Button>
              </Nav.Link>
              <Nav.Link href="#deets">
                <a
                  href="tel:9148584723"
                  className="text-decoration-none text-dark"
                >
                  <i class="fa-solid fa-phone"></i> +91 91485 84723
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
