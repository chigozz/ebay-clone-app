import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assets/item1.jpg";
import image2 from "../../assets/item2.avif";
import iphone from "../../assets/iphone.png";
import carTools from "../../assets/carTools.jpg";


const SampleProduct = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Ar/VR</h3>
            <p>Get your high quality AR/VR deals now! check available deals</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Drones</h3>
            <p>Get your high quality Drone deals now! check available deals</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={iphone}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>iPhone</h3>
            <p>Get your cheap and high quality iPhone deals now! check available deals</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carTools}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Car Tools</h3>
            <p>Get your cheap and high quality CarTools deals now! check available deals</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SampleProduct;
