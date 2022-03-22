import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Img from "../../Images/homepage.png";

const Mainslider = () => {

    const associations = [
        {
          id: 1,
          ImageUrl: Img,
          alt: "",
        },
        {
            id: 2,
            ImageUrl: Img,
            alt: "",
          },          
        {
            id: 3,
            ImageUrl: Img,
            alt: "",
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
    <div id="mainslider" className="">
      {/* <div className="">
        <Image src={Img} alt="" className="img-fluid w-100" />
      </div> */}
      <OwlCarousel options={options}>
    {associations.map((item, index) => (
          <div className="mx-2" key={index}>
            <Row>
              <Col md={12}>
                <div className="text-center">
                  <Image
                    src={item.ImageUrl}
                    alt={item.alt}
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Mainslider;
