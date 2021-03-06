import React from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";

 const SliderCard = (props) => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
        <Card>
            <img src={props.img} alt={props.alt}/>
            <h1> Hello </h1>
            <h1> Kamu </h1>
        </Card>
    </Slider>
  );
}

export default SliderCard;