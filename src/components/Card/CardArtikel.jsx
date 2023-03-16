import React from "react";
import "../../css/CardArtikel.css";

//assets
import Clock from "../../assets/Clock.svg";
import Profile from "../../assets/Profile.svg";
import { Link } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom"
import { useNavigate } from 'react-router';

const CardArtikel = ({ tag_artikel, title, created, description,foto }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    if(window.localStorage.getItem('token')){
      navigate('/detailartikelLogin')
    } else{
      navigate('/detailartikel')
    }
  }
  return (
    <div className="card-artikel">
      <img className="img-artikel" src={`https://reyhafiz.aenzt.tech${foto}`}></img>
      <div className="textpart-a">
        <h5 className="tag-artikel">{tag_artikel}</h5>
        <h3 className="title-ca">{title}</h3>
        <div className="part-artikel">
          <img className="clock-icon" src={Clock}></img>
          <h6 className="text-a">{created}</h6>
        </div>
        <h6 className="desc-artikel">{description}</h6>

        <button className="btn-artikel" onClick={handleClick}>Baca lebih lanjut</button>
      </div>
    </div>
  );
};

export default CardArtikel;
