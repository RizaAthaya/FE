import React from "react";
import "../../css/HomeSec4.css";

//components
import CardPM from "../Card/CardPM";
import CarouselSwiper from "../Carousel/CarouselSwiper";

const HomeSec4 = (props) => {
  
  return (
    <div className="home-sec4">
      <h2 className="title-HS4">
        Kami Hadir Bersama Mentor-Mentor yang Berpengalaman
      </h2>
      <div className="carousel-3dnya">
       <CarouselSwiper/>
      </div>
    </div>
  );
};

export default HomeSec4;
