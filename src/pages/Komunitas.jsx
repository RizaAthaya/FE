import React from "react";
import './Komunitas.css';
import styled from "styled-components";

//components
import Navbar from "../components/general/Navbar";

const Komunitas = (props) => {
  return (
    <div className="whole-komunitas">
      <Navbar />
      <div className="atas-komunitas">
        <div className="bread-crumb"></div>
        <div className="header-komunitas">
          <h3 className="title-komunitas">Komunitas</h3>
          <h5 className="desc-komunitas">
            Lorem ipsum dolor sit amet consectetur. Dictum vestibulum habitant
            libero morbi placerat eleifend.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Komunitas;
