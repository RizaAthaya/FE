import React from "react";
import "../../css/CardSA.css";

import Buttons from "../general/Buttons";
const CardSA = ({ linkImg, tag1, tag2, title, harga }) => {
  const handleClick = () => {
    if (window.localStorage.getItem("token")) {
      navigate("/detailprogram");
    } else {
      navigate("/detailprogramLogin");
    }
  };
  const handleClick2 = () => {
    if (window.localStorage.getItem("token")) {
      navigate("/pembayaran");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="card-sa">
        <img
          className="img-sa"
          src={`https://reyhafiz.aenzt.tech${linkImg}`}
        ></img>
        <div className="text-part">
          <div className="tag-part">
            <h5 className="tag-sa">{tag1}</h5>
            <h5 className="tag-sa">{tag2}</h5>
          </div>
          <div className="main-saCard">
            <h6 className="title-saCard">{title}</h6>
            <h6 className="harga-saCard">Rp. {harga.toLocaleString()}</h6>
            <Buttons
              ke="/pembayaran"
              label="Daftar mentoring"
              styleBtn="btn-sa1"
            ></Buttons>
            <Buttons
              ke="/detailProgramLogin"
              label="Lihat detail"
              styleBtn="btn-sa2"
            ></Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSA;
