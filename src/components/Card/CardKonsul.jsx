import React from "react";
import "./CardKonsul.css";

//assets
import user from "../../assets/UserKonsul.svg";
import kalender from "../../assets/CalendarKonsul.svg";
import map from "../../assets/MapKonsul.svg";
import clock from "../../assets/ClockKonsul2.svg";

const CardKonsul = (props) => {
  return (
    // stylenya pake lewat props aja. cssnya ganti name pake $
    <div className="card-kon">
      <h3 className="judul-cardK">Tanya Mentor</h3>
      <div className="part-cardK">
        <img className="icon-cardK" src={user}></img>
        <h3 className="text-partCardK">Bambang Pamungkas</h3>
      </div>
      <div className="part-cardK">
        <img className="icon-cardK" src={kalender}></img>
        <h3 className="text-partCardK">18 Maret 2023</h3>
      </div>
      <div className="part-cardK">
        <img className="icon-cardK" src={clock}></img>
        <h3 className="text-partCardK">09.00 - 10.00 WIB</h3>
      </div>
      <div className="part-cardK">
        <img className="icon-cardK" src={map}></img>
        <h3 className="text-partCardK">Link Zoom</h3>
      </div>
    </div>
  );
};

export default CardKonsul;
