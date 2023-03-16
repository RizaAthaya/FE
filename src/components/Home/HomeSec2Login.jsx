import React from "react";
import "../../css/HomeSec2.css";

//components
import CarouselCardPromo from "../Carousel/CarouselCardPromo";
import CarouselBoxPromo from "../Carousel/CarouselBoxPromo";
import CarouselPB from "../Carousel/CarouselPB";
import { Link } from "react-router-dom";

const HomeSec2 = (props) => {
  return (
    <div className="home-sec2">
      <h2 className="title-sec2">Informasi Beasiswa</h2>
      <div className="carousel-program">
        <CarouselPB />
      </div>
      <Link to="/pojokbeasiswalogin">
        <button className="btn-ibN">Lihat beasiswa lainnya</button>
      </Link>
    </div>
  );
};

export default HomeSec2;
