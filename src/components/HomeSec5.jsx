import React from "react";
import "./HomeSec5.css";
import "./CardHome2";
import CardHome2 from "./CardHome2";
import BoxSec5 from "./BoxSec5";
const HomeSec5 = (props) => {
  return (
    <div className="sec5">
      <h2 className="title-sec5">Lorem ipsum</h2>
      <div className="tagSec5">
        <BoxSec5 text="" />
        <BoxSec5 text="" />
        <BoxSec5 text="" />
        <BoxSec5 text="" />
      </div>

      <CardHome2 />
    </div>
  );
};

export default HomeSec5;
