import React from "react";
import "../../css/CardReview.css";

//assets
import ProfilePhoto from "../../assets/ProfilePhoto.svg";
import Group from "../../assets/Group.svg";

const CardPM = (props) => {
  return (
    <div className="card-review">
      <div className="icons-review">
        <img src={Group} alt="icon-review" className="icon-review"></img>
      </div>
      <div className="text-review">
      <br/> <br/> <br/>
        <h3 className="text1-review">
          Dalam waktu singkat, saya berhasil mendapatkan beasiswa yang saya
          impikan dan berhasil memulai studi saya di luar negeri. Saya sangat
          merekomendasikan ScholarWithUs kepada siapa saja yang ingin
          mendapatkan bimbingan dan dukungan dalam meraih beasiswa ke luar
          negeri. Terima kasih ScholarWithUs!
        </h3>
      </div>

      <hr className="line-profileReview" />
      <div className="profile-review">
        <img className="pict-review" src={ProfilePhoto} alt="Profile-pict"></img>
        <div className="text-profileReview">
          <h2 className="title-profileReview"> Bambang Pamungkas </h2>
          <div className="desc-profileReview">
            <h4 className="tag1-profileReview"> Beasiswa IISMA </h4>
            <h4 className="tag2-profileReview"> Harvard University </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPM;
