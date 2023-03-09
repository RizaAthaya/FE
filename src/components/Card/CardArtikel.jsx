import React from "react";
import "./CardArtikel.css";

//assets
import Clock from '../../assets/Clock.svg';
import Profile from "../../assets/Profile.svg";

const CardArtikel = ({tag_artikel, title, penulis, created, description}) => {
  return (
    <div className="card-artikel">
      <img className="img-artikel"></img>
      <div className="textpart-a">
        <h5 className="tag-artikel">{tag_artikel}</h5>
        <h3 className="title-ca">{title}</h3>
        <div className="part-artikel">
          <img className="people-icon" src={Profile}></img>
          <h6 className="text-a">{penulis}</h6>
          <img className="clock-icon" src={Clock}></img>
          <h6 className="text-a">{created}</h6>
        </div>
        <h6 className="desc-artikel">
         {description}
        </h6>
        <button className="btn-artikel">Baca lebih lanjut</button>
      </div>
    </div>
  );
};

export default CardArtikel;
