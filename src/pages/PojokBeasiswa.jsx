import React, { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../css/PojokBeasiswa.css";
import styled from "styled-components";

//components
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import CardPB from "../components/Card/CardPB";
// import BoxInputFilter from "../components/box/BoxInputFilter";
import ManggilCardPB from "../components/Pagination/ManggilCardPB";
import DropDown from "../components/DropDownButton/DDBFilter";
import DropDown2 from "../components/DropDownButton/DDBFilter2";
import DropDown3 from "../components/DropDownButton/DDBFilter3";
import BoxFilterTag from "../components/box/BoxFilterTag";

//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// const FilterMini = styled.nav`
//   padding: 8px 16px;
//   background-color: #fafaff;
//   width: 190px;
//   height: 40px;
//   border: 1px solid #86868b;
//   border-radius: 8px;
// `;

const AllCourse = (props) => {
  const [search, setSearch] = useState("");
  // const [scholarshipsData, setScholarshipsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [linknya, setLink] = useState(
    `https://reyhafiz.aenzt.tech/api/scholarships`
  );

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchParams({ name: search });
  };
  // const searching = async () => {
  //   e.preventDefault();
  //   try {
  //     const result = await axios.get(
  //       `https://reyhafiz.aenzt.tech/api/scholarships/search?name=${searchParams.get('name')}`
  //     );
  //     setScholarshipsData(result.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    handleSearch();
    // searching();
    setLink(
      `https://reyhafiz.aenzt.tech/api/scholarships/search?name=${search}`
    );
  }, [search]);

  // const handleSubmit = useCallback(
  //   () => {
  //     searching()
  //   },
  //   [search],
  // )

  return (
    <div className="whole-sec4">
      <Navbar />
      <div className="body-sec4">
        <div className="bread-crumb">
          <h3>
            <Link to="/">Home</Link> - Pojok Beasiswa
          </h3>
        </div>
        <div className="main-img">
          <h3 className="title-pb">Pojok Beasiswa</h3>
          <h5 className="desc-pb">
            Temukan ratusan informasi beasiswa terlengkap dan terbaru dari
            berbagai negara di Pojok Beasiswa kami.
          </h5>
        </div>
        <div className="main-part">
          <form onSubmit={handleSearch}>
            <div className="filter-bar">
              <div className="boxInputFilter">
                {/** Search part */}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="Cari beasiswa"
                  className="inputFilter"
                ></input>
              </div>
              <button type="submit" className="btn-filterBar">
                Cari
              </button>
            </div>
          </form>
        </div>
        <div className="semua-bawah-filter">
          <div className="nav-section">
            <BoxFilterTag />
          </div>
          {/** Pagination Part */}
          <ManggilCardPB dataLink={linknya} />
        </div>
      </div>
      <div className="footerPB">
        <Footer />
      </div>
    </div>
  );
};

export default AllCourse;
