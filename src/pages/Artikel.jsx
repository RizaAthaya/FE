import React from "react";
import "./Artikel.css";
//components
import CardArtikel from "../components/CardArtikel";
import Navbar from "../components/general/Navbar2";
import Footer from "../components/general/Footer";

const Artikel = (props) => {
  return (
    <div className="whole-artikel">
      <Navbar />
      <div className="atas-artikel">
        <div className="bread-crumb">Page - Page</div>
        <div className="header-artikel">
          <h5 className="tag-artikel">Tips dan Trik</h5>
          <h3 className="title-artikel">7 Persiapan Kuliah di Luar Negeri</h3>
        </div>
      </div>
      <div className="main-artikel">
        <CardArtikel />
      </div>
      <Footer/>
    </div>
  );
};

export default Artikel;
