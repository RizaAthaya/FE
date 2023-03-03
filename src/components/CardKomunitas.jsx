import React from "react";
import "./CardKomunitas.css";

//assets
import Clock from "../assets/Clock.svg";
import Profile from "../assets/Profile.svg";

const CardKomunitas = (props) => {
  return (
    <div className="card-k">
      <h3 className="text1-k">
        Apa yang perlu dipersiapkan ketika mengikuti beasiswa IISMA ?
      </h3>
      <div className="part1-cardk">
        <img className="people-icon" src={Profile}></img>
        <h6 className="text2-k">Riza Athaya</h6>
        <img className="clock-icon" src={Clock}></img>
      </div>
      <h5 className="desc-cardK">
        Lorem ipsum dolor sit amet consectetur. Dignissim nec elit enim a varius
        sapien. Lectus cum pretium viverra sagittis auctor consectetur. Enim ut
        purus urna viverra arcu. Velit vel in et pellentesque commodo lectus
        dolor amet.
      </h5>
      <div className="tags-cardK">
      <h6 className="tag-cardK"#iisma></h6>
      <h6 className="tag-cardK">#tips-trik</h6>
      </div>
      <div></div>
    </div>
  );
};

export default CardKomunitas;
