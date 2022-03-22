import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import image1 from "../../Images/house-constructions.png";
import image2 from "../../Images/business.png";
import image3 from "../../Images/materials.png";


const OurServices = () => {

    const services = [{ 

        id: 1, 
        title: "House Construction",
        imageurl: image1,
    
    },
    { id: 2, 
        title: "Construction for Business",
        imageurl: image2,
    
    },
    { id: 3, 
        title: "Building Materials",
        imageurl: image3,
    
    },
    
    
    ];

  return (

    <div className="bg-light">
    <Container className="pb-md-3 pt-md-3">
      <Row className="justify-content-center g-2">
          <h2 className="py-3 text-secondary text-center">Our Services</h2> 
        {services.map((service) => (
          <Col md={4} key={service.id}>
            <Card>
              <Card.Img variant="top" src={service.imageurl} className="position-relative" />
                {/* <h6 class="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2">{service.status}</h6> */}
              <Card.Body className="text-start bg-black text-white">
                <Card.Title>{service.title}</Card.Title>
                {/* <div className="text-center">
                <Button
                  variant="primary"
                  as={Link}
                  to={service.link}
                  className=""
                >
                  Read More
                </Button>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  );
};

export default OurServices;
