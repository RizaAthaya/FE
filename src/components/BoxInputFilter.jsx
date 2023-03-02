import React from "react";
import "./BoxInputFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const BoxInputFilter = (props) => {
  return (
    <div className="boxInputFilter">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input placeholder="Cari beasiswa" className="inputFilter"></input>
    </div>
  );
};

export default BoxInputFilter;
