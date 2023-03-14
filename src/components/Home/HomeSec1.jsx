import React from "react";
import "../../css/HomeSec1.css";

//components
import Buttons from "../general/Buttons";
//assets
import pana from "../../assets/pana.svg";

const HomeSec1 = () => {
  return (
    <div className="home-sec1">
      <div className="full-sec1">
        <div className="left-sec1">
          <div className="text-sec1">
            <h1 className="title-sec1">
              <b className="title-sec1">Buka Potensimu Taklukkan Dunia.</b>
            </h1>
            <h6 className="desc-sec1">
              Biarkan mentor kami membimbing kamu mempersiapkan diri meraih
              beasiswa ke perguruan tinggi terbaik di seluruh dunia.
            </h6>
          </div>
          <Buttons label="Daftar Sekarang" styleBtn="btn-daftar" ke="/register"></Buttons>
        </div>

        <img className="img-sec1" src={pana}></img>
      </div>
    </div>
  );
};

export default HomeSec1;
