import React from "react";
import "../../css/CardKonsul.css";

//assets
import user from "../../assets/UserKonsul.svg";
import kalender from "../../assets/CalendarKonsul.svg";
import map from "../../assets/MapKonsul.svg";
import clock from "../../assets/ClockKonsul2.svg";

const CardKonsul = ({ dataKonsul }) => {
  return (
    // stylenya pake lewat props aja. cssnya ganti name pake $
    <div className="card-kon">
      {dataKonsul.map((item) => (
        <>
          <h3 className="judul-cardK">Tanya Mentor</h3>
          <div className="part-cardK">
            <img className="icon-cardK" src={kalender}></img>
            <h3 className="text-partCardK">{item.date}</h3>
          </div>
          <div className="part-cardK">
            <img className="icon-cardK" src={clock}></img>
            <h3 className="text-partCardK">{item.start} - {item.finish}</h3>
          </div>
          <div className="part-cardK">
            <img className="icon-cardK" src={map}></img>
            <h3 className="text-partCardK">Link Zoom</h3>
          </div>
        </>
      ))}
    </div>
  );
};

export default CardKonsul;
