import React from "react";
import "../css/Komunitas.css";
import styled from "styled-components";

//components
import Navbar from "../components/general/Navbar";
import BoxInputFilter from "../components/box/BoxInputFilter";
import Footer from "../components/general/Footer";

import ManggilKomunitas from "../components/Pagination/ManggilKomunitas";
import { Link } from "react-router-dom";

const Komunitas = (props) => {
  return (
    <div className="whole-komunitas">
      <Navbar />
      <div className="atas-komunitas">
        <div className="bread-crumb">
          <h3>
            <Link to="/">Home</Link> - Komunitas
          </h3>
        </div>
        <div className="header-komunitas">
          <h3 className="title-komunitas">Komunitas</h3>
          <h5 className="desc-komunitas">
            Lorem ipsum dolor sit amet consectetur. Dictum vestibulum habitant
            libero morbi placerat eleifend.
          </h5>
        </div>
      </div>
      <div className="fullFilter">
        <div className="filter-komunitas">
          <Link to="/login">
            <button className="btn-diskusi">Buat diskusi</button>
          </Link>

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

export default Komunitas;
