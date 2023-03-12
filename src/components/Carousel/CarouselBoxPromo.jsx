import React, { useEffect, useState } from "react";
// import { dataCard } from "../utils/Datas";
import "../../css/CarouselBoxPromo.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Carousel.css";
import axios from "axios";
import Poster from "../../assets/poster.svg";

const Carousel = (props) => {
  const [tagPromo, setTagPromo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // ini hanya akan mengambil artikel yang punya index tagLevl id tertentu. disini kumasukin 2
      const response = await axios.get("https://reyhafiz.aenzt.tech/articles/");
      // cari tau tag promo itu idnya berapa?
      // salah ding, ini harusnya pake get yang artikel terbaru. tagnya promo
      if (response.data.id == 2) {
        setTagPromo(response.data);
      }
      // nah ini 2 nya index idnya
      // bener tapi ari artikel, kalau cuma nama tagnya, ya yang lain ga muncul
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
        breakpoint: 1920,
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
      <Slider {...settings}>
        {tagPromo.map((item) => (
          <div className="boxPromo">
            <iframe
              width="400px"
              height="240px"
              src="" // ini diganti dengan tempat link img nya
              title={item.name}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CarouselBoxPromo = (props) => {
  return (
    <div className="boxVid">
      <Carousel />
    </div>
  );
};

export default CarouselBoxPromo;
