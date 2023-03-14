import React from "react";
import "../../css/PopUpBerhasil.css"

//assets
import exit from "../../assets/ExitBerhasil.svg";

const PopUpBerhasil = (props) => {
  return (
    <div className="popUp-berhasilKonsul">
      <h3 className="popUp-konsultasiBerhasil">
        Pengajuan konsultasi berhasil! </h3>
        <img src={exit} className="logo-exitBerhasil"></img>
    </div>
  );
};

export default PopUpBerhasil;
