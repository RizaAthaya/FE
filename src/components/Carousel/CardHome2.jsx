import React from "react";
import "./CardHome2.css";
import { dataCard } from "../utils/Datas";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <div className="ch2">
        <Slider {...settings}>
          {dataCard.map((item) => (
            <div className="card-car">
              <div className="card-top">
                <div className="ch2-all">
                  <div className="ch2-atas">
                    <img className="ch2-img" src=""></img>
                    <div className="ch2-textTitle">
                      <div className="ch2-tag">{item.tag1}</div>
                      <div className="ch2-name">{item.tag2}</div>
                    </div>
                  </div>
                  <hr className="ch2-line"/>
                  <div className="ch2-body">
                    <h5 className="desc-ch2">{item.descLong}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const CardHome2 = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default CardHome2;
