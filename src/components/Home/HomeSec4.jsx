import React from "react";
import "../../css/HomeSec4.css";

//components
import CardPM from "../Card/CardPM";
import BuatCarousel2 from "../Carousel/BuatCarousel2";
import Carousel3D from "../Carousel/Carousel3D";

const HomeSec4 = (props) => {
  return (
    <div className="home-sec4">
      <h2 className="title-HS4">
        Kami Hadir Bersama Mentor-Mentor yang Berpengalaman
      </h2>
      <div className="carousel-3dnya">
        <Carousel3D/>
      </div>
    </div>
  );
};

export default HomeSec4;
