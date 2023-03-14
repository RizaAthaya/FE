import React from "react";
import "../../css/CardPopUp2.css"
import DropDownPopUp from "../DropDownButton/DropDownPopUp";
import DropDownPopUp2 from "../DropDownButton/DropDownPopUp2";
import DropDownPopUp3 from "../DropDownButton/DropDownPopUp3";
import ButtonPengajuan from "../general/ButtonPengajuan";
import styled from "styled-components";
import Unggah from "../../assets/Unggah.svg";

const BoxUnggah = styled.div`
  width: 368px;
  height: 155px;
  padding: 5%;
  border: 2px dashed #a9b1f4;
  border-radius: 16px;
`;

const CardPopUp2 = (props) => {
  return (
    <div className="pop-up2">
      <div className="box-popUp2">
        <h3 className="title-popUp2">Review Dokumen</h3>
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
        <div className="each-dd">
          <h3 className="titlenya-dd">Tipe Dokumen</h3>
          <DropDownPopUp3 />
        </div>
        <div className="each-dd">
          <h3 className="titlenya-dd">Unggah Dokumen</h3>
          <BoxUnggah>
            <img className="img-unggah" src={Unggah}></img>
            <h3 className="titlenya-unggah">Cari Dokumen untuk diunggah</h3>
          </BoxUnggah>
        </div>
      </div>
      <button className="submit-popUp1">Ajukan Konsultasi</button>
    </div>
  );
};
export default CardPopUp2;
