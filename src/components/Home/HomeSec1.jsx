import React from "react";
import "./HomeSec1.css";

//assets
import pana from '../../assets/pana.svg';

const HomeSec1 = () => {
  return (
    <div className="sec1">
      <div className="full-sec1">
        <div className="text-sec1">
          <h1 className="title-sec1">
            <b className="title-sec1">Lorem ipsum dolor sit amet.</b>
          </h1>
          <h6 className="desc-sec1">
            Lorem ipsum dolor sit amet consectetur. Maecenas eget pharetra
            lectus in dolor egestas scelerisque. Maecenas dignissim vivamus eget
            congue morbi dapibus quis.
          </h6>
        </div>
        <img className="img-sec1" src={pana}></img>
      </div>
    </div>
  );
};

export default HomeSec1;
