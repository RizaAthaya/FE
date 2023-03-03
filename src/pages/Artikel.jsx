import React from "react";
import "./Artikel.css";
//components
import Navbar from "../components/general/Navbar2";

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
    </div>
  );
};

export default Artikel;
