import React from "react";
import "../../css/DDDB1.css";

const DDDB1 = ({data}) => {
  return (
    <div className="dddb1">
      <div className="dddb1-trigger">
        <h3 className="title-dddb1">Syarat & Ketentuan</h3>
      </div>
      <div className="dddb1-container">
        <div className="dddb1-part">
          <div className="left-boxDDDB1">
            <h3 className="subTitle-dddb1">AGE</h3>
          </div>

          <h3 className="descTitle-dddb1">{data.age}</h3>
        </div>
        <hr className="line-dddb1" />
        <div className="dddb1-part">
          <div className="left-boxDDDB1">
            <h3 className="subTitle-dddb1">GPA</h3>
          </div>
          <h3 className="descTitle-dddb1">{data.gpa}</h3>
        </div>
        <hr className="line-dddb1" />
        <div className="dddb1-part">
          <div className="left-boxDDDB1">
            <h3 className="subTitle-dddb1">ENGLISH TEST</h3>
          </div>
          <h3 className="descTitle-dddb1">{data.english_test}</h3>
        </div>
        <hr className="line-dddb1" />
        <div className="dddb1-part">
          <div className="left-boxDDDB1">
            <h3 className="subTitle-dddb1">OTHER LANGUAGE TEST</h3>
          </div>
          <h3 className="descTitle-dddb1">{data.other_language_test}</h3>
        </div>
        <hr className="line-dddb1" />
        <div className="dddb1-part">
          <div className="left-boxDDDB1">
            <h3 className="subTitle-dddb1">STANDARIZED TEST</h3>
          </div>
          <h3 className="descTitle-dddb1">{data.standarized_test}</h3>
        </div>
        <hr className="line-dddb1" />
        <div className="dddb1-part">
          <div className="left-boxDDDB1">
            <h3 className="subTitle-dddb1">DOCUMENTS</h3>
          </div>
          <h3 className="descTitle-dddb1">{data.documents}</h3>
        </div>
        <hr className="line-dddb1" />
        <div className="dddb1-part">
          <div className="left-boxDDDB1">
            <h3 className="subTitle-dddb1">OTHERS</h3>
          </div>
          <h3 className="descTitle-dddb1">{data.other}</h3>
        </div>
      </div>
    </div>
  );
};

export default DDDB1;
