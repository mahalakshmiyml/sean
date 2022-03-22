import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Img from "../../Images/house1.png";
import Img1 from "../../Images/house1.png";
import Img2 from "../../Images/house1.png";
const OurProjects = () => {

  const projects = [{ 
    id: 1, 
    title: "House1",
    location:"Sarjapur Road",
    description: "3 Bed Appartments",
    imageurl: Img,
    // link: "/city-projects/meridian/meridian-park",
    // status:"Coming Soon"

},
{ id: 2, 
    title: "House2",
    location:"Sarjapur Road",
    description: "1/2 Bed Appartments",
    imageurl: Img1,
    // link: "/city-projects/eden/eden-park",
    // status:"New Launch"

},
{ id: 3, 
    title: "House3",
    location:"Sarjapur Road",
    description: "3/4 BHK Appartments",
    imageurl: Img2,
    // link: "/city-projects/avalon/avalon-park",
    // status:"Sold Out"

},

];  
      const options = {
        rewind: true,
        dots: false,
        autoplay: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 1,
            nav: false,
          },
          1000: {
            items: 2,
            nav: false,
            loop: false,
          },
        },
      };

  return (
    <div id="our projects" className="py-md-5">
      {/* <div className="">
        <Image src={Img} alt="" className="img-fluid w-100" />
      </div> */}
       <Container className="pb-md-4 pt-md-3">
       <Row className="justify-content-center g-3">
            <h2 className="text-secondary text-center">Our Projects</h2> 
            <p className="text-muted text-center">From a couple to a large Indian family, we have houses built with emotions for everyone.</p>
      <OwlCarousel options={options}>
     
        
          {projects.map((project) => (
            <Col md={11} key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.imageurl} className="position-relative" />
                  {/* <h6 class="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2">{project.status}</h6> */}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>

                  <Card.Text>{project.location}</Card.Text>
                  <h6 className="">{project.description}</h6>
                  <div className="text-center">
                  {/* <Button
                    variant="primary"
                    as={Link}
                    to={project.link}
                    className=""
                  >
                    Read More
                  </Button> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </OwlCarousel>
        </Row>
      </Container>
      
    </div>
  );
};

export default OurProjects;
