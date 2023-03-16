import React from "react";
import { Link } from "react-router-dom";
import "../../css/CardPB.css";

const CardPB = ({
  tag_level,
  tag_cost,
  scholarship_provider,
  name,
  close_registration,
  open_registration,
}) => {
  return (
    <div className="card-pb">
      <div className="tagpb-part">
        <h5 className="pb-tag1">{tag_level}</h5>
        <h5 className="pb-tag2">Multiple Countries</h5>
        <h5 className="pb-tag3">{tag_cost}</h5>
      </div>
      <div className="textpb-part">
        <div className="pb-text1">{scholarship_provider}</div>
        <Link to="/detailProgramLogin">
          <div className="pb-text2">{name}</div>
        </Link>
      </div>
      <div className="datepb-part">
        <div className="open-part">
          <h5 className="open-left">Open Registration</h5>{" "}
          <h5 className="open-right">{open_registration}</h5>
        </div>
        <div className="close-part">
          <h5 className="close-left">Close Registration</h5>{" "}
          <h5 className="close-right">{close_registration}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardPB;
