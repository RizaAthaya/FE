import React, { useState, useCallback } from "react";
import "../css/StudyAbroad.css";
import axios from "axios";

// components
// import Manggil from "../Pagination/Manggil"
import Navbar from "../components/general/Navbar2";
import CarouselStudyAbroad from "../components/Carousel/CarouselStudyAbroad";
import Footer from "../components/general/Footer";
import ManggilCardSA from "../components/Pagination/ManggilCardSA";
import Search from "../components/general/Search";
import DropDown from "../components/DropDownButton/DDBFilter";
import DropDown2 from "../components/DropDownButton/DDBFilter2";
import DropDown3 from "../components/DropDownButton/DDBFilter3";

//assets
import Cari from "../assets/Search.svg";

const StudyAbroad = (props) => {
  // const [searchProgram, setSearchProgram] = useState([]);
  // const [program, setProgram] = useState([]);

  // useEffect(() => {
  //   handleSearch("");
  // }, []);

  // const handleSearch = (title) => {
  //   const response = axios.get(
  //     `http://127.0.0.1:8000/api/programs/search?name=${title}`
  //   );

  //   setProgram(response.data);
  //   console.log(response.data);
  // };
  const [suggestions, setSuggestions] = useState("");

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    fetch(`https://reyhafiz.aenzt.tech/api/programs/search?name=${title}`)
      .then((res) => res.json())
      .then((json) => setSuggestions(json.data.items));
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <div className="whole-sa">
      <Navbar />
      <div className="atasan-sa">
        <div className="bread-crumb">Home - Study Abroad</div>
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
              {/** Search */}
             <Search/>
            </div>
            <div className="nav-filter">
              <DropDown />
              <DropDown3 />
              <DropDown2 />
            </div>
          </div>
        </div>
        <div className="semua-pagination">
         
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudyAbroad;
