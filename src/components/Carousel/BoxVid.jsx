import React from "react";
import { dataCard } from "../utils/Datas";
import "./BoxVid.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import Poster from '../../assets/poster.svg';

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
          breakpoint: 1920,
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
        <iframe
        width="400px"
        height="240px"
        src={Poster}
        title={item.title}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /></div>
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
