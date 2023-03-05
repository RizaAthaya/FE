import React from "react";
import "./HomeSec2.css";

//components
import Swiper from "../../components/Carousel/Swiper"

const HomeSec2 = (props) => {
  return (
    <div className="home-sec2">
      <h2 className="title-sec2">Promo Menarik</h2>
      <Swiper/>
    </div>
  );
};

export default HomeSec2;
