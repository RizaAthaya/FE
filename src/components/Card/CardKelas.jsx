import React from "react";
import "../../css/CardKelas.css";

const CardKelas = (props) => {
  return (
    <div className="card-kelas">
      <img className="img-kelas"></img>
      <div className="kotak-cardK">
        <div className="part-cardKelas">
          <h2 className="text-kelas">Topik Pembelajaran</h2>
          <div className="bar-kelas"></div>
        </div>
        <button className="btn-cardKelas">Mulai Belajar</button>
      </div>
    </div>
  );
};

export default CardKelas;
