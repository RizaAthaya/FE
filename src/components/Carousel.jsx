import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {dataDigitalBestSeller} from './Data';
import './Carousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
    {dataDigitalBestSeller.map((item) => (
        <div className="card-car">
          <div className="card-top">
            <video src={item.linkImg} type="video/mp4" autoPlay repeat></video>
          </div>
        </div>
      ))}
    </Slider>
      
    </div>
  );
};

export default Carousel;
