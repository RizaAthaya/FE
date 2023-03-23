import React, { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
const StudyAbroadLogin = (props) => {
  const [search, setSearch] = useState("");
  // const [scholarshipsData, setScholarshipsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [linknya, setLink] = useState(
    `https://reyhafiz.aenzt.tech/api/programs`
  );
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

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchParams({ name: search });
  };

  useEffect(() => {
    handleSearch();
    setLink(`https://reyhafiz.aenzt.tech/api/programs/search?name=${search}`);
  }, [search]);

  // const [suggestions, setSuggestions] = useState("");

  // const debounce = (func) => {
  //   let timer;
  //   return function (...args) {
  //     const context = this;
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       timer = null;
  //       func.apply(context, args);
  //     }, 500);
  //   };
  // };

  // const handleChange = (value) => {
  //   fetch(`https://reyhafiz.aenzt.tech/api/programs/search?name=${title}`)
  //     .then((res) => res.json())
  //     .then((json) => setSuggestions(json.data.items));
  // };

  // const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <div className="whole-sa">
      <Navbar />
      <div className="atasan-sa">
        <div className="bread-crumb">
          <h3>
            <Link to="/home">Home</Link> - Mentoring
          </h3>
        </div>
        <div className="header-sa">
          <div className="title-sa">Mentoring</div>
          <div className="desc-sa">
            Dapatkan bimbingan dari mentor berpengalaman untuk membantumu meraih
            beasiswa impianmu.
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
              <form onSubmit={handleSearch}>
                {/** Search */}
                <div className="search-box">
                  <div className="search-part">
                    <img className="img-search" src={Cari}></img>
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      className="cari-box"
                      type="search"
                      placeholder="Cari layanan mentoring"
                    ></input>
                  </div>
                  <button className="btn-search">Cari</button>
                </div>
              </form>
            </div>
            <div className="nav-filter">
              <DropDown />
              <DropDown3 />
              <DropDown2 />
            </div>
          </div>
        </div>
        <div className="semua-pagination">
          <ManggilCardSA data={linknya} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudyAbroadLogin;
