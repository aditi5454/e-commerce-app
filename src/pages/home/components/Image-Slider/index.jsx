import React,{ useState } from "react";
import "./image-slider.css"
import Carousel from 'react-bootstrap/Carousel';

import Carousel4 from "./../../../../common/assets/images/carousel-4.webp";
import Carousel5 from "./../../../../common/assets/images/carousel-5.webp";
import Carousel7 from "./../../../../common/assets/images/carousel-7.webp";

const ImageSlider=()=> {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="image-slider-component">
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel7}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel5}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ImageSlider;
