import React from "react";
import "../../css/BoxFilterTag.css";

const BoxFilterTag = (props) => {
  return (
    <div className="box-filterTag">
      <div className="title-boxFilter">
        <h3>Filter</h3>
        <a>Reset</a>
      </div>
      <div className="ddb-box-filter">
        <div className="ddb-filter-each">
          <h3>Negara Tujuan</h3>
          {/** Tempat ddb */}
        </div>
        <div className="ddb-filter-each">
          <h3>Jenjang</h3>
          {/** Tempat ddb */}
        </div>
        <div className="ddb-filter-each">
          <h3>Tipe Pendanaan</h3>
          {/** Tempat ddb */}
        </div>
        <button className="btn-terapkan">Terapkan</button>
      </div>
    </div>
  );
};

export default BoxFilterTag;
