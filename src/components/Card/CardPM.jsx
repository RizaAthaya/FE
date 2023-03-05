import React from "react";
import "./CardPM.css";

//assets
import ProfilePhoto from "../../assets/ProfilePhoto.svg";
import Group from "../../assets/Group.svg";

const CardPM = (props) => {
  return (
    <div className="card-pm">
      <div className="icons-pm">
        <img src={Group} alt="icon-pm" className="icon-pm"></img>
      </div>
      <div className="text-pm">
      <br/> <br/> <br/>
        <h3 className="text1-pm">
          Dalam waktu singkat, saya berhasil mendapatkan beasiswa yang saya
          impikan dan berhasil memulai studi saya di luar negeri. Saya sangat
          merekomendasikan ScholarWithUs kepada siapa saja yang ingin
          mendapatkan bimbingan dan dukungan dalam meraih beasiswa ke luar
          negeri. Terima kasih ScholarWithUs!
        </h3>
      </div>

      <hr className="line-profile" />
      <div className="profile-pm">
        <img className="pict-pm" src={ProfilePhoto} alt="Profile-pict"></img>
        <div className="text-profile">
          <h2 className="title-profile"> Bambang Pamungkas </h2>
          <div className="desc-profile">
            <h4 className="tag1-profile"> Beasiswa IISMA </h4>
            <h4 className="tag2-profile"> Harvard University </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPM;
