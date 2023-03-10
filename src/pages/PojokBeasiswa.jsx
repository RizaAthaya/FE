import React from "react";
import "../css/PojokBeasiswa.css";
import styled from "styled-components";

//components
import Navbar from "../components/general/Navbar2";
import Footer from "../components/general/Footer";
import CardPB from "../components/Card/CardPB";
import BoxInputFilter from "../components/box/BoxInputFilter";

import ManggilCardPB from "../components/Pagination/ManggilCardPB";
import DropDown from "../components/DropDownButton/DDBFilter";
import DropDown2 from "../components/DropDownButton/DDBFilter2";
import DropDown3 from "../components/DropDownButton/DDBFilter3";

// const FilterMini = styled.nav`
//   padding: 8px 16px;
//   background-color: #fafaff;
//   width: 190px;
//   height: 40px;
//   border: 1px solid #86868b;
//   border-radius: 8px;
// `;

const AllCourse = (props) => {
  return (
    <div className="whole-sec4">
      <Navbar />
      <div className="body-sec4">
        <div className="bread-crumb">Page - Page</div>
        <div className="main-img">
          <h3 className="title-pb">Pojok Beasiswa</h3>
          <h5 className="desc-pb">
            Lorem ipsum dolor sit amet consectetur. Dictum vestibulum habitant
            libero morbi placerat eleifend.
          </h5>
        </div>
        <div className="main-part">
          <div className="filter-bar">
            <BoxInputFilter />
            <button type="submit" className="btn-filterBar">
              Cari
            </button>
          </div>
          <div className="nav-section">
            <div className="nav-filter">
              <DropDown />
              <DropDown3 />
              <DropDown2 />
            </div>
          </div>
        </div>
        <ManggilCardPB/>
      </div>

      <Footer />
    </div>
  );
};

export default AllCourse;
