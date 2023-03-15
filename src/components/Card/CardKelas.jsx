import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/modul">
          <button className="btn-cardKelas">Mulai Belajar</button>
        </Link>
      </div>
    </div>
  );
};

export default CardKelas;
