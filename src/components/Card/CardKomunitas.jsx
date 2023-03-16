import React from "react";
import "../../css/CardKomunitas.css";
import { useNavigate } from "react-router";

//assets
import Clock from "../../assets/Clock.svg";
import Profile from "../../assets/Profile.svg";
import Chat from "../../assets/Chat.svg";
import plus from "../../assets/Plus.svg";

const CardKomunitas = ({ nama, waktu, judul, desc, tags, reply }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    if(window.localStorage.getItem('token')){
      navigate('/detailkomunitasLogin')
    } else{
      navigate('/detailkomunitas')
    }
  };
  return (
    <div className="all-cardKomunitas">
      <div className="profile-komunitas">
        <img src="" className="profilepart-komunitas"></img>
      </div>
      <div className="card-k">
        <div className="part1-cardk">
          <img className="people-icon" src={Profile}></img>
          <h6 className="text2-k">{nama}</h6>
          <img className="clock-icon" src={Clock}></img>
          <h6 className="text2-k">{waktu}</h6>
        </div>
        <h3 className="text1-k">{judul}</h3>
        <h5 className="desc-cardK">{desc}</h5>
        <div className="tags-cardK">
        {tags.map((item) => (
          <h6 className="tag-cardK">{item.name}</h6>
        ))}
        </div>
        <div className="akhir-box">
          <div className="akhir-cardK">
            <div className="leftAkhir-cardK" onClick={handleClick}>
              <img className="chat-icon" src={Chat}></img>
              <h5 className="text3-k">{reply} pembahasan </h5>
            </div>
            <div className="rightAkhir-cardK">
              <button className="tambah-diskusi" onClick={handleClick}>
                <img className="logoPlus" src={plus}></img>
                <h3 className="tambah-text">Jawaban</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKomunitas;
