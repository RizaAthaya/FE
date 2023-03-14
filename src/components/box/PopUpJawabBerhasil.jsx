import React from "react";

const PopUpJawabBerhasil = (props) => {
  return (
    <div className="popUp-berhasilKonsul">
      <h3 className="popUp-konsultasiBerhasil">
        Jawaban berhasil ditambahkan.
      </h3>
      <img src={exit} className="logo-exitBerhasil"></img>
    </div>
  );
};

export default PopUpJawabBerhasil;
