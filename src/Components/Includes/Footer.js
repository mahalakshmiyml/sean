import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div id="footer" className="bg-black">
        <Container>
            <Row className="justify-content-center">
                <Col md={4}>
                <div className="">
                <h5 className="text-white pt-2 pb-2">Site Map</h5>
                <ul className=" list-unstyled">
                  <li>
                    <a href="/" className="text-decoration-none text-white">How it Works</a>
                  </li>
                  <li>
                    <a href="/about-us " className="text-decoration-none text-white">Our Projects</a>
                  </li>
                  <li>
                    <a href="/mentoring" className="text-decoration-none text-white">Luxury Projects</a>
                  </li>
                  <li>
                    <a href="/coaching" className="text-decoration-none text-white">Cost Estimator</a>
                  </li>
                  <li>
                    <a href="/blog" className="text-decoration-none text-white">Material Estimator</a>
                  </li>
                  <li>
                    <a href="/contact-us" className="text-decoration-none text-white">Floor Plans</a>
                  </li>
                  
                  <li>
                    <a href="/contact-us" className="text-decoration-none text-white">About Us</a>
                  </li>
                  <li>
                    <a href="/contact-us" className="text-decoration-none text-white">Blogs & Articles</a>
                  </li>
                  <li>
                    <a href="/contact-us" className="text-decoration-none text-white">Careers</a>
                  </li>
                  <li>
                    <a href="/contact-us" className="text-decoration-none text-white">Contact Us</a>
                  </li>
                  <li>
                    <a href="/contact-us" className="text-decoration-none text-white">Reviews</a>
                  </li>
                </ul>
              </div>
                </Col>
                <Col md={4}>
                <div className="">
                <h5 className="text-white pt-2 pb-2">Others</h5>
                <ul className=" list-unstyled">
                  <li>
                    <a href="/" className="text-decoration-none text-white">Join Us Professional</a>
                  </li>
                  <li>
                    <a href="/about-us " className="text-decoration-none text-white">Refer a partner</a>
                  </li>
                  <li>
                    <a href="/mentoring" className="text-decoration-none text-white">Channel Partner</a>
                  </li>
                </ul>
                <h5 className="text-white pt-2 pb-2">Information</h5>
                <ul className=" list-unstyled">
                  <li>
                    <a href="/" className="text-decoration-none text-white">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/about-us " className="text-decoration-none text-white">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/mentoring" className="text-decoration-none text-white">FAQs</a>
                  </li>
                  <li>
                    <a href="/mentoring" className="text-decoration-none text-white">Cancellation Policy</a>
                  </li>
                </ul>
              </div>
                </Col>
                <Col md={4}>
                    <h5 className="text-white pt-2 pb-2">Sean Alexanderia Construction for business<FontAwesomeIcon icon={['fas', 'arrow-right']} /></h5>
                    <h5 className="text-white pt-2 pb-2">Sean Alexanderia Building Materials<FontAwesomeIcon icon={['fas', 'arrow-right']} /></h5>
                    <hr />
                    <h5 className="text-white pt-2 pb-2">Get in touch<FontAwesomeIcon icon={['fas', 'arrow-right']} /></h5>
                    <a
                  href="tel:9148584723"
                  className="text-decoration-none text-dark"
                >
                  <FontAwesomeIcon icon={['fas', 'phone']} /> +91 91485 84723
                </a>
                </Col>
            </Row>


        </Container>
    </div>
  )
}

export default Footer