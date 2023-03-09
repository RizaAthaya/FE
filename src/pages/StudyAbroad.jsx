import React from "react";
import "./StudyAbroad.css";

// components
// import Manggil from "../Pagination/Manggil"
import Navbar from "../components/general/Navbar2";
import CarouselStudyAbroad from "../components/Carousel/CarouselStudyAbroad";
import Footer from "../components/general/Footer";
import Manggil from "../components/Pagination/Manggil";
import ManggilCardSA from "../components/Pagination/ManggilCardSA";
import FilterMini from "../components/FilterMini";
import Search from "../components/Search";
import DropDown from "../components/DropDownButton/DDBFilter";
import DropDown2 from "../components/DropDownButton/DDBFilter2";
import DropDown3 from "../components/DropDownButton/DDBFilter3";

const StudyAbroad = (props) => {
  return (
    <div className="whole-sa">
      <Navbar />
      <div className="atasan-sa">
        <div className="bread-crumb">Page - Page</div>
        <div className="header-sa">
          <div className="title-sa">Study Abroad</div>
          <div className="desc-sa">
            Lorem ipsum dolor sit amet consectetur. Dictum vestibulum habitant
            libero morbi placerat eleifend.
          </div>
        </div>
      </div>
      <div className="body-sa">
        <h3 className="title1-bodySA">Program Terbaru</h3>
        <CarouselStudyAbroad />
        <h3 className="title2-bodySA">Program Tersedia</h3>
        <div className="nav-tengah">
          <div className="nav-sa2">
            <div className="search-filter">
              <Search />
            </div>
            <div className="nav-filter">
              <DropDown />
              <DropDown3 />
              <DropDown2 />
            </div>
          </div>
        </div>
        <div className="semua-pagination">
          <ManggilCardSA />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudyAbroad;
