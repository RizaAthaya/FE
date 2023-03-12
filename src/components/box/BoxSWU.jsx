import React from "react";
import "../css/BoxSWU.css";

const BoxIB = (props) => {
  return (
    <div className="boxSWU">
      <img className="imgBoxSWU" src={props.src}></img>
      <div className="textBoxSWU">
        <h2 className="titleBoxSWU">{props.title}</h2>
        <h5 className="descBoxSWU">{props.desc}</h5>
      </div>
    </div>
  );
};

export default BoxIB;
