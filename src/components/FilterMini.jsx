import React from "react";
import "./FilterMini.css";

import Vector from "../assets/Vector.svg";
const FilterMini = (props) => {
  return (
    <div className="filterMini">
      <h3 className="title-mini">{props.title}</h3>
      <img className="arrow-mini" src={Vector}></img>
    </div>
  );
};

export default FilterMini;
