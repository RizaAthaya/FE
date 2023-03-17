import React from "react";
import { Link } from "react-router-dom";
import "../../css/CardKelas.css";

const CardKelas = ({ dataKelas }) => {
  return (
    <div className="card-kelas">
      {dataKelas.map((item) => (
        <>
          <img className="img-kelas" src={`https://reyhafiz.aenzt.tech${item.image}`}></img>
          <div className="kotak-cardK">
            <div className="part-cardKelas">
              <h2 className="text-kelas">{item.name}</h2>
              <div className="bar-kelas"></div>
            </div>
            <Link to="/modul">
              <button className="btn-cardKelas">Mulai Belajar</button>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default CardKelas;
