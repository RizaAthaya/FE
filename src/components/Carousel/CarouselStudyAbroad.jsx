import React, { useEffect, useState } from "react";
import "../../css/CarouselStudyAbroad.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router';
import axios from "axios";

//assets

//components
import Buttons from "../general/Buttons";
import CardSA from "../Card/CardSA";

const Carousel = (props) => {
  let navigate = useNavigate();
  let id = 0;
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

  const handleDetail = ({id}) => {
    if (window.localStorage.getItem("token")) {
      navigate(`/detailprogramlogin/${id}`);
    } else {
      navigate(`/detailprogram/${id}`);
    }
  }
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
    <div className="Carousel-PB">
      <div className="carousel">
        <div className="ch1">
          <Slider {...settings}>
            {newProgram.map((items, index) => (
              <CardSA key={index}
              id = {items.id}
              linkImg={items.image}
              tag1={items.tag_level.name}
              tag2={items.tag_cost.name}
              title={items.name}
              harga={items.price}/>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const CarouselStudyAbroad = (props) => {
  return (
    <div >
      <Carousel />
    </div>
  );
};

export default CarouselStudyAbroad;
