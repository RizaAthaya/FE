import React from "react";
import "../../css/CardPopUp.css";
import DropDownPopUp from "../DropDownButton/DropDownPopUp";
import DropDownPopUp2 from "../DropDownButton/DropDownPopUp2";
import ButtonPengajuan from "../general/ButtonPengajuan";

const CardPopUp = (props) => {
  return (
    <div className="pop-up1">
      <div className="box-popUp1">
        <h3 className="title-popUp1">Tanya Mentor</h3>
        <div className="drop-down-s">
          <div className="each-dd">
            <h3 className="titlenya-dd">Program Konsultasi</h3>
            <DropDownPopUp />
          </div>
          <div className="each-dd">
            <h3 className="titlenya-dd">Tanggal Konsultasi</h3>
            <DropDownPopUp2 />
          </div>
        </div>
        <div className="each-dd">
          <h3 className="titlenya-dd">Waktu Konsultasi</h3>
          <ButtonPengajuan />
        </div>
      </div>

      <button className="submit-popUp1">Ajukan Konsultasi</button>
    </div>
  );
};

export default CardPopUp;
