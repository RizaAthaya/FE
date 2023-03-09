import "./Carousel3D.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CardforPM from "../utils/Datas4";
import "../Card/CardPM.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Right from "../../assets/Right.svg";
import Left from "../../assets/Left.png";

import axios from "axios";
function Carousel3D() {
  const [newMentor, setNewMentor] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/mentors/new"
      );
      setNewMentor(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, []);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel3D">
      <Slider {...settings}>
        {newMentor.map((item) => (
          <div
            className={
              item.id - 1 === imageIndex ? "slide activeSlide" : "slide"
            }
          >
            <div className="card-PM">
              <img className="img-PM" src=""></img>
              <h3 className="nama-PM">{item.name}</h3>
              <h3 className="tag-PM">{item.study_track}</h3>
              <h3 className="uni-PM">{item.scholar_history}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel3D;
