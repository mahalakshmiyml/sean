import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import image1 from "../../Images/brick-bolt-payment-i-ilustration-3.svg";
import image2 from "../../Images/brick-bolt-payment-i-ilustration-2.svg";
import image3 from "../../Images/brick-bolt-payment-i-ilustration-3.svg";
import image4 from "../../Images/brick-bolt-payment-i-ilustration-4.svg";

const WhySean = () => {
  const reviews = [
    {
      id: 1,
      title: "Safe Money Transaction",
      imageurl: image1,
    },
    { id: 2, title: "Absolute Transparency", imageurl: image2 },
    { id: 3, title: "Assure Quality Control", imageurl: image3 },

    { id: 4, title: "Zero Delays", imageurl: image4 },
  ];
  return (
    <div className="py-md-3">
      <Container className="pb-md-3 pt-md-3">
        <Row className="justify-content-center g-2">
          <h2 className="text-secondary text-center">
            {" "}
            Why Sean Alexanderia ?
          </h2>
          <p className="text-primary text-center">
            We ensure peace of mind, trust, and transparent construction.
          </p>
          {reviews.map((review) => (
            <Col md={3} key={review.id}>
              <Card className="bg-light">
                <div className="text-center">
                  <Image
                    src={review.imageurl}
                    className="position-relative"
                    style={{ height: "225px", width: "200px" }}
                  />
                </div>
                {/* <h6 class="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2">{review.status}</h6> */}
                <Card.Body className="text-center text-black">
                  <Card.Title>{review.title}</Card.Title>
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

export default WhySean;
