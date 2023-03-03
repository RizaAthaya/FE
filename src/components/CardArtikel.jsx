import React from "react";
import "./CardArtikel.css";

//assets
import Clock from "../assets/Clock.svg";
import Profile from "../assets/Profile.svg";

const CardArtikel = (props) => {
  return (
    <div className="card-artikel">
      <img className="img-artikel"></img>
      <div className="textpart-a">
        <h5 className="tag-artikel">Tips dan Trik</h5>
        <h3 className="title-ca">7 Persiapan Kuliah di Luar Negeri</h3>
        <div className="part-artikel">
          <img className="people-icon" src={Profile}></img>
          <h6 className="text-a">Kak bagas</h6>
          <img className="clock-icon" src={Clock}></img>
          <h6 className="text-a">10 Juni 2023</h6>
        </div>
        <h6 className="desc-artikel">
          Mungkin beberapa di antara kita ada yang tertarik untuk melanjutkan
          kuliah di luar negeri. Namun, tidak sedikit juga di antara kita yang
          merasa minder atau bahkan takut.
        </h6>
        <button className="btn-artikel">Baca lebih lanjut</button>
      </div>
    </div>
  );
};

export default CardArtikel;
