import React, { useEffect, useState } from "react";
import "../../css/CarouselStudyAbroad.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";

// import "./Carousel.css";

import { dataCard2 } from "../utils/Datas2";

//assets

//components
import Buttons from "../general/Buttons";

const Carousel = (props) => {
  const [newProgram, setNewProgram] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/programs/new"
      );
      setNewProgram(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1700,
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
    <div className="CarouselSA">
      <div className="carousel">
        <div className="ch1">
          <Slider {...settings}>
            {newProgram.map((item) => (
              <div className="card-car">
                <div className="card-top">
                  <div className="card-sa">
                    <img className="img-sa" src={item.image}></img>
                    <div className="text-part">
                      <div className="tag-part">
                        <h5 className="tag-sa">{item.tag_level.name}</h5>
                        <h5 className="tag-sa">{item.tag_cost.name}</h5>
                      </div>
                      <div className="main-saCard">
                        <h6 className="title-saCard">{item.name}</h6>
                        <h6 className="harga-saCard">Rp. {item.price.toLocaleString()}</h6>
                        <Buttons
                          ke="/pembayaran"
                          label="Daftar mentoring"
                          styleBtn="btn-sa1"
                        ></Buttons>
                        <Buttons ke="/detailProgramLogin" label="Lihat detail" styleBtn="btn-sa2"></Buttons>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const CarouselStudyAbroad = (props) => {
  return (
    <div className="card-saFull">
      <Carousel />
    </div>
  );
};

export default CarouselStudyAbroad;
