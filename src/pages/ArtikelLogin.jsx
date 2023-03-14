import React from "react";
import { Link } from "react-router-dom";
import "../css/Artikel.css";

//components
// import TagArtikel from "../components/general/TagArtikel";
import ButtonGroup from "../components/general/ButtonGroup";
import CardArtikel from "../components/Card/CardArtikel";
import Navbar from "../components/general/Navbar2";
import Footer from "../components/general/Footer";
import ManggilCardArtikel from "../components/Pagination/ManggilCardArtikel";

const ArtikelLogin = (props) => {
  return (
    <div className="whole-artikel">
      <Navbar />
      <div className="atas-artikel">
        <div className="bread-crumb">
          <h3>
            <Link to={"/home"}>Home</Link> - Artikel
          </h3>
        </div>
        <div className="header-artikel">
          <h5 className="tag-artikel">Tips dan Trik</h5>
          <h3 className="title-artikel">7 Persiapan Kuliah di Luar Negeri</h3>
        </div>
      </div>
      <div className="main-artikel">
        <h3 className="title-mainArtikel">Artikel Lainnya</h3>
        <div className="tags-artikel">
          <ButtonGroup />
        </div>

        <ManggilCardArtikel />
      </div>
      <Footer />
    </div>
  );
};

export default ArtikelLogin;
