import React from "react";
import "../../css/BoxFilterTag.css";

import DropDown from "../DropDownButton/FilterTag1";
import DropDown2 from "../DropDownButton/FilterTag2";
import DropDown3 from "../DropDownButton/FilterTag3";

const BoxFilterTag = (props) => {
  return (
    <div className="box-filterTag">
      <div className="title-boxFilter">
        <h3>Filter</h3>
        <a>Reset</a>
      </div>
      <div className="ddb-box-filter">
        <div className="ddb-filter-each ke1">
          <h3>Negara Tujuan</h3>
          {/** Tempat ddb */}
          <DropDown/>
        </div>
        <div className="ddb-filter-each ke2">
          <h3>Jenjang</h3>
          {/** Tempat ddb */}
          <DropDown2/>
        </div>
        <div className="ddb-filter-each ke3">
          <h3>Tipe Pendanaan</h3>
          {/** Tempat ddb */}
          <DropDown3/>
        </div>
        <button className="btn-terapkan">Terapkan</button>
      </div>
    </div>
  );
};

export default BoxFilterTag;
