import React, { useState } from "react";
import "../css/Komunitas.css";
import styled from "styled-components";

// assets
import exit from "../assets/VectorExit.svg";

//components
import Navbar from "../components/general/Navbar2";
import BoxInputFilter from "../components/box/BoxInputFilter";
import Footer from "../components/general/Footer";
import { Link } from "react-router-dom";
import ManggilKomunitas from "../components/Pagination/ManggilKomunitas";
import PopUpDiskusi from "../components/box/PopUpDiskusi";

const KomunitasLogin = (props) => {
  const [Show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!Show);
  };
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
          Tanyakan pertanyaan, bagikan pengalaman, dan temukan teman sejalan di perjalanan pendidikanmu.
          </h5>
        </div>
      </div>
      <div className="fullFilter">
        <div className="filter-komunitas">
          <button className="btn-diskusi" onClick={handleClick}>
            Buat diskusi
          </button>
          <div className={`diskusi-${Show}`}>
            <img className="btn-exitDiskusi" src={exit} onClick={handleClick}></img>
            <PopUpDiskusi />
          </div>
          <div className="filter-barKomunitas">
            <BoxInputFilter />
            <button type="submit" className="btn-filterBar">
              Cari
            </button>
          </div>
        </div>
      </div>
      <div className="main-cardK">
        <ManggilKomunitas />
      </div>
      <Footer />
    </div>
  );
};

export default KomunitasLogin;
