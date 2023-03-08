import React from "react";
import "./Search.css";

//assets
import Cari from "../assets/Search.svg";

const Search = (props) => {
  return (
    <div className="search-box">
      <div className="search-part">
        <img className="img-search" src={Cari}></img>
        <input className="cari-box" type="text" placeholder="Cari layanan mentoring"></input>
      </div>
      <button className="btn-search">Cari</button>
    </div>
  );
};

export default Search;
