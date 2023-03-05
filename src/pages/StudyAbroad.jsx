import React from "react";
import "./StudyAbroad.css";

// components
import Navbar from "../components/general/Navbar2";
import CarouselStudyAbroad from "../components/Carousel/CarouselStudyAbroad";
import Footer from "../components/general/Footer";
import Manggil from "../components/Pagination/Manggil";

const StudyAbroad = (props) => {
  return (
    <div className="whole-sa">
      <Navbar />
      <div className="atasan-sa">
        <div className="bread-crumb">Page -Page</div>
        <div className="header-sa">
          <div className="title-sa">Study Abroad</div>
          <div className="desc-sa">
            Lorem ipsum dolor sit amet consectetur. Dictum vestibulum habitant
            libero morbi placerat eleifend.
          </div>
        </div>
      </div>
      <div className="body-sa">
        <h3 className="title1-bodySA">Program Populer</h3>
        <CarouselStudyAbroad />
        <h3 className="title2-bodySA">Program Tersedia</h3>
        <Manggil/>
      </div>
      <Footer/>
    </div>
  );
};

export default StudyAbroad;
