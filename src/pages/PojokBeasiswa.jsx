import React from "react";
import "./PojokBeasiswa.css";

//components
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";

import BoxInputFilter from "../components/BoxInputFilter";

const AllCourse = (props) => {
  return (
    <div className="whole-sec4">
      <Navbar />
      <div className="body-sec4">
        <div className="bread-crumb">Page - Page</div>
        <div className="main-img"></div>
        <div className="main-part">
          <div className="filter-bar">
            <div className="TitleFilter-part">
            <h2 className="Title-filter">Filter</h2>
            <h3 className="reset-filter">Reset</h3>
            </div>
            
            <BoxInputFilter/>
            <div className="input-urutkan"></div>
          </div>
          <div className="main-bottom">
            <div className="card-filter"></div>
            <div className="card-program"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllCourse;
