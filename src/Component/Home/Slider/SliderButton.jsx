import React from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";

 const SliderButton = (props) => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
        
    </Slider>
  );
}

export default SliderButton;