import React from "react";
import { dataCard } from "./Datas";
import "./BoxVid.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

const Carousel = (props) => {
  const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
return (
  <div className="carousel">
  <Slider {...settings}>
  {dataCard.map((item) => (
        <div className="boxVid">
        <iframe width="390px" height="180px" margin="auto" src={item.linkVid} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullScreen></iframe>
        </div>
    ))}
  </Slider>
    
  </div>
);
};


const BoxVid = (props) => {
  
  return (
    <div className="boxVid">
      <Carousel/>
    </div>
  );
};

export default BoxVid;
