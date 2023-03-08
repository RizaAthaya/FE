import React from "react";
import './CardSA.css';

import Buttons from "../general/Buttons";
const CardSA = ({linkImg, tag1, tag2, title, harga}) => {
  return (
    <div>
      <div className="card-sa">
        <img className="img-sa" src={linkImg}></img>
        <div className="text-part">
          <div className="tag-part">
            <h5 className="tag-sa">{tag1}</h5>
            <h5 className="tag-sa">{tag2}</h5>
          </div>
          <div className="main-saCard">
            <h6 className="title-saCard">{title}</h6>
            <h6 className="harga-saCard">Rp. {harga.toLocaleString()}</h6>
            <Buttons label="Daftar mentoring" styleBtn="btn-sa1"></Buttons>
            <Buttons label="Lihat detail" styleBtn="btn-sa2"></Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSA;
