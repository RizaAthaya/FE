import React from "react";
import "../../css/DDDB2.css";

const DDDB2 = ({data}) => {
  return (
    <div className="dddb2">
      <div className="dddb2-trigger">
        <h3 className="title-dddb2">Keuntungan</h3>
      </div>
      <div className="dddb2-container">
        <ul>
          <li>{data.benefit}</li>
          
        </ul>
      </div>
    </div>
  );
};

export default DDDB2;
