import React from "react";
import "./HomeSec2.css";

//components
// import Swiper from "../../components/Carousel/Swiper"

import { Card } from "@mui/material";
import CarouselCardPromo from "../Carousel/CarouselCardPromo";
import CarouselBoxPromo from "../Carousel/CarouselBoxPromo";

const HomeSec2 = (props) => {
  return (
    <div className="home-sec2">
      <h2 className="title-sec2">Promo Menarik</h2>
      <CarouselBoxPromo/>
    </div>
  );
};

export default HomeSec2;
