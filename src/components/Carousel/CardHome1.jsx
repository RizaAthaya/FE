import React from "react";
import "./CardHome1.css";
import { dataCard } from "../utils/Datas";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Carousel.css";

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
      <div className="ch1">
        <Slider {...settings}>
          {dataCard.map((item) => (
            <div className="card-car">
              <div className="card-top">
                <div className="ch1-all">
                  <div className="ch1-tags">
                    <div className="tag1">{item.tag1}</div>
                    <div className="tag2">{item.tag2}</div>
                  </div>
                  <div className="ch1-body">
                    <h5 className="desc-ch1">{item.desc}</h5>
                    <h2 className="title-ch1">{item.title}</h2>
                  </div>
                  <div className="ch1-ket">
                    <h5 className="ket1">{item.ket1}</h5>
                    <h5 className="ket2">{item.ket2}</h5>
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

const CardHome1 = () => {
  return <div>
  <Carousel/>
  </div>;
};

export default CardHome1;
