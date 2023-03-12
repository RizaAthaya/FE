import React from "react";
import "../../css/CardKomunitas.css";

//assets
import Clock from "../../assets/Clock.svg";
import Profile from "../../assets/Profile.svg";
import Chat from "../../assets/Chat.svg";

const CardKomunitas = ({nama, waktu, judul, desc, tag1, tag2, reply}) => {
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
        <h3 className="text1-k">
        {judul}
        </h3>
        <h5 className="desc-cardK">
          {desc}
        </h5>
        <div className="tags-cardK">
          <h6 className="tag-cardK">{tag1}</h6>
          <h6 className="tag-cardK">{tag2}</h6>
        </div>
        <div className="akhir-box">
          <div className="akhir-cardK">
            <div className="leftAkhir-cardK">
              <img className="chat-icon" src={Chat}></img>
              <h5 className="text3-k">{reply}</h5>
            </div>
            <div className="rightAkhir-cardK">
              <button className="tambah-diskusi">
                <img className="logoPlus"></img>
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
