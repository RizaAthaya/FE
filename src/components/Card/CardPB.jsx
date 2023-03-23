import React from "react";
import { Link } from "react-router-dom";
import "../../css/CardPB.css";
import { useNavigate } from "react-router";

const CardPB = ({
  id,
  tag_level,
  tag_cost,
  tag_countries,
  scholarship_provider,
  name,
  close_registration,
  open_registration,
}) => {
  let navigate = useNavigate();
  const handleClick = () => {
    if (window.localStorage.getItem("token")) {
      navigate(`/detailbeasiswalogin/${id}`);
    } else {
      navigate(`/detailbeasiswa/${id}`);
    }
  };
  return (
    <div className="card-pb">
      <div className="tagpb-part">
        <h5 className="pb-tag1">{tag_level}</h5>
        <h5 className="pb-tag2">{tag_countries}</h5>
        <h5 className="pb-tag3">{tag_cost}</h5>
      </div>
      <div className="textpb-part">
        <div className="pb-text1">{scholarship_provider}</div>
        <div className="pb-text2" onClick={handleClick}>
          {name}
        </div>
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
