import React from "react";
import PropTypes from "prop-types";
import "../css/nyoba.css"

const nyoba = (props) => {
  return (
    <div>
      <select
        name="kecamatan"
        placeholder="Pilih Kecamatan"
        onChange={(e) => setKecamatan(e.target.value)}
        className="ddb-select"
      >
        <option className="ddb-option" value="">Kecamatan</option>
        <option className="ddb-option" value="Klojen">Klojen</option>
        <option className="ddb-option" value="Lowokwaru">Lowokwaru</option>
        <option className="ddb-option" value="Karang Ploso">Karang Ploso</option>
        <option  value="Blimbing">Blimbing</option>
      </select>
    </div>
  );
};

export default nyoba;
