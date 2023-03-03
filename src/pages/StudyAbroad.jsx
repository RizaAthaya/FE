import React from "react";
import "./StudyAbroad.css";

// components
import Navbar from "../components/general/Navbar2";
import CardStudyAbroad from "../components/Carousel/CardStudyAbroad";
import Footer from "../components/general/Footer";

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
        <CardStudyAbroad />
        <h3 className="title2-bodySA">Program Tersedia</h3>
      </div>
      <Footer/>
    </div>
  );
};

export default StudyAbroad;
