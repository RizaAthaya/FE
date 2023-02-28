import React from "react";
import "./HomeSec3.css";

//components
import BoxSec3 from "./BoxSec3";

const HomeSec3 = () => {
  return (
    <div className="sec3">
      <h2 className="title-sec3">Lorem ipsum</h2>
      <div className="isi-sec3">
        <img className="pict-sec3" src=""></img>
        <div className="box-part"></div>
        <div className="box-atas">
          <BoxSec3 />
          <BoxSec3 />
        </div>
        <div className="box-bawah">
          <BoxSec3 />
          <BoxSec3 />
        </div>
      </div>
    </div>
  );
};

export default HomeSec3;
