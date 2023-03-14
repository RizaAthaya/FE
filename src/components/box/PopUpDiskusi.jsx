import React from "react";
import "../../css/PopUpDiskusi.css";

const PopUpDiskusi = (props) => {
  return (
    <div className="popup-diskusi">
      <h3 className="title-diskusi">Buat Diskusi Baru</h3>
      <div className="form-diskusi">
        <div className="paket-form">
          <h3 className="title-formDiskusi">Judul Pertanyaan</h3>
          <input className="input-formDiskusi" placeholder="Masukkan judul pertanyaan"></input>
        </div>
        <div className="paket-form">
          <h3 className="title-formDiskusi">Uraian Pertanyaan</h3>
          <input className="input-formDiskusi2" ></input>
          <h3 className="penjelasan-formDiskusi">Uraikan pertanyaan kamu lebih panjang dan jelas pada bagian ini.</h3>
        </div>
        <div className="paket-form">
          <h3 className="title-formDiskusi">Kata Kunci</h3>
          <input className="input-formDiskusi"></input>
          <h3 className="penjelasan-formDiskusi">Tuliskan beberapa kata kunci pertanyaan kamu di sini dengan tanda koma sebagai pemisah</h3>
        </div>
        <button className="btn-buatDiskusi">Buat Diskusi</button>
      </div>
    </div>
  );
};

export default PopUpDiskusi;
