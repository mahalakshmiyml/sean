import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Packages = () => {

    const budgets = [{ 

        id: 1, 
        title: "Package 1",
        description: "Budget Cost1",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    
    },
    { id: 2, 
        title: "Package 2",
        description: "Budget Cost2",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    
    },
    { id: 3, 
        title: "Package 3",
        description: "Budget Cost3",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    
    },
    
    
    ];

  return (

    <div className="bg-light">
    <Container className="pb-md-3 pt-md-3">
      <Row className="justify-content-center g-2">
          <h2 className="text-secondary text-center">Cost Estimator</h2> 
          <p className="text-muted text-center"> Find the best home construction packages.*</p>
        {budgets.map((budget) => (
          <Col md={4} key={budget.id}>
            <Card className="py-md-2">
              <Card.Img variant="top" src={budget.imageurl} className="position-relative" />
                {/* <h6 class="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2">{package.status}</h6> */}
               
              <Card.Body className="text-center">
              <Card.Title>{budget.title}</Card.Title>
              <h6 className="">{budget.description}</h6>
              <p>{budget.detail}</p>
                
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

export default Packages;
