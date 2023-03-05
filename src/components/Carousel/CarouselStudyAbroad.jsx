import React from "react";
import "./CarouselStudyAbroad.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import { dataCard2 } from "../utils/Datas2";

//assets

//components
import Buttons from "../general/Buttons";

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
          {dataCard2.map((item) => (
            <div className="card-car">
              <div className="card-top">
                <div className="card-sa">
                  <img className="img-sa" src={item.linkImg}></img>
                  <div className="text-part">
                    <div className="tag-part">
                      <h5 className="tag-sa">{item.tag1}</h5>
                      <h5 className="tag-sa">{item.tag2}</h5>
                    </div>
                    <div className="main-saCard">
                      <h6 className="title-saCard">
                        {item.title}
                      </h6>
                      <h6 className="harga-saCard">{item.harga}</h6>
                      <Buttons
                        label="Daftar mentoring"
                        styleBtn="btn-sa1"
                      ></Buttons>
                      <Buttons
                        label="Lihat detail"
                        styleBtn="btn-sa2"
                      ></Buttons>
                    </div>
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

const CarouselStudyAbroad = (props) => {
  return <div className="card-saFull">
  <Carousel/>
  </div>;
};

export default CarouselStudyAbroad;
