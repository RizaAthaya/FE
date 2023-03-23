import React, { useState, useEffect, useCallback } from "react";
import "../css/Komunitas.css";
import styled from "styled-components";

//components
import Navbar from "../components/general/Navbar2";
import Footer from "../components/general/Footer";
import ManggilKomunitas from "../components/Pagination/ManggilKomunitas";
import { Link, useSearchParams } from "react-router-dom";

//assets
import exit from "../assets/VectorExit.svg";
import PopUpDiskusi from "../components/box/PopUpDiskusi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const KomunitasLogin = (props) => {
  const [Show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!Show);
  };
  const [search, setSearch] = useState("");
  // const [scholarshipsData, setScholarshipsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [linknya, setLink] = useState(
    `https://reyhafiz.aenzt.tech/api/discussions/search?key=dis`
  );
  const handleSearch = async (e) => {
    setSearchParams({ key: search });
  };

  useEffect(() => {
    handleSearch();
    setLink(`https://reyhafiz.aenzt.tech/api/discussions/search?key=${search}`);
  }, [search]);

  return (
    <div className="whole-komunitas">
      <Navbar />
      <div className="atas-komunitas">
        <div className="bread-crumb">
          <h3>
            <Link to="/home">Home</Link> - Komunitas
          </h3>
        </div>
        <div className="header-komunitas">
          <h3 className="title-komunitas">Komunitas</h3>
          <h5 className="desc-komunitas">
            Tanyakan pertanyaan, bagikan pengalaman, dan temukan teman sejalan
            di perjalanan pendidikanmu.
          </h5>
        </div>
      </div>
      <div className="fullFilter">
        <div className="filter-komunitas">
          <button className="btn-diskusi" onClick={handleClick}>
            Buat diskusi
          </button>
          <div className={`diskusi-${Show}`}>
            <img
              className="btn-exitDiskusi"
              src={exit}
              onClick={handleClick}
            ></img>
            <PopUpDiskusi />
          </div>
          <form onSubmit={handleSearch}>
            <div className="filter-barKomunitas">
              <div className="boxInputFilter">
                {/** Search part */}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="Cari diskusi"
                  className="inputFilter"
                ></input>
              </div>
              <button type="submit" className="btn-filterBar">
                Cari
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="main-cardK">
      <ManggilKomunitas data={linknya}/>
      </div>
      <Footer />
    </div>
  );
};

export default KomunitasLogin;
