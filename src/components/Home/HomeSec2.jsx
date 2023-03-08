import React from "react";
import "./HomeSec2.css";

//components
// import Swiper from "../../components/Carousel/Swiper"

import { Card } from "@mui/material";
import CarouselCardPromo from "../Carousel/CarouselCardPromo";
import CarouselBoxPromo from "../Carousel/CarouselBoxPromo";
import CarouselPB from "../Carousel/CarouselPB";

const HomeSec2 = (props) => {
  return (
    <div className="home-sec2">
      <h2 className="title-sec2">Informasi Beasiswa</h2>
      <div className="carousel-program">
        <CarouselPB />
      </div>
      <button className="btn-ibN">Lihat beasiswa lainnya</button>
    </div>
  );
};

export default HomeSec2;
