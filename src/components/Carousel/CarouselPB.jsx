import React, { useEffect, useState } from "react";
import "./CarouselPB.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import "../Card/CardPB.css";

//utils
import { items } from "../utils/Datas3";
import axios from "axios";

const Carousel = (props) => {
  const [newPB, setNewPB] = useState([]);
  const [tagLevel, setTagLevel] = useState([]);
  const [tagCost, setTagCost] = useState([]);
  const [tagCountries, setTagCountries] = useState([]);
  // ini ambil 9 beasiswa terbaru
  useEffect(async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/scholarships/new");
    setNewPB(response.data);
  }, []);
  // ini ambil semua tagCost
  useEffect(async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/tagCosts/");
    setTagCost(response.data);
  });
  // ini ambil semua tagLevel
  useEffect(async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/tagLevels/");
    setTagLevel(response.data);
  }, []);
  // ini ambil semua tagCountries
  useEffect(async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/tagCountries/");
    setTagCountries(response.data);
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
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1500,
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
          {newPB.map((item) => (
            
            <div className="card-car">
              <div className="card-top">
                <div className="card-pb">
                  <div className="tagpb-part">
                    <h5 className="pb-tag1">Non Degree</h5>
                    <h5 className="pb-tag2">Multiple Countries</h5>
                    <h5 className="pb-tag3">Fully Funded</h5>
                  </div>
                  <div className="textpb-part">
                    <div className="pb-text1">Kemdikbud indonesia</div>{" "}
                    {/* ini pemberi beasiswa */}
                    <div className="pb-text2">{item.name}</div>
                  </div>
                  <div className="datepb-part">
                    <div className="open-part">
                      <h5 className="open-left">Open Registration</h5>
                      <h5 className="open-right">24 Jan 2023</h5>
                      {/* ini tanggal open regist */}
                    </div>
                    <div className="close-part">
                      <h5 className="close-left">Close Registration</h5>
                      <h5 className="close-right">24 Jan 2023</h5>
                      {/* ini tanggal closed regist */}
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

const CarouselPB = (props) => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default CarouselPB;
