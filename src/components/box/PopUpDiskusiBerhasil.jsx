import React from "react";

const PopUpDiskusiBerhasil = (props) => {
  return (
    <div className="popUp-berhasilKonsul">
      <h3 className="popUp-konsultasiBerhasil">
        Diskusi baru berhasil ditambahkan.
      </h3>
      <img src={exit} className="logo-exitBerhasil"></img>
    </div>
  );
};

export default PopUpDiskusiBerhasil;
