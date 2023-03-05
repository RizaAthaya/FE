import React from "react";
import './CardPB.css';

const CardPB = (props) => {
  return (
    <div className="card-pb">
      <div className="tagpb-part">
        <h5 className="pb-tag1">Non Degree</h5>
        <h5 className="pb-tag2">Multiple Countries</h5>
        <h5 className="pb-tag3">Fully Funded</h5>
      </div>
      <div className="textpb-part">
        <div className="pb-text1">Kemdikbud indonesia</div>
        <div className="pb-text2">
          IISMA : Indonesian Internasional Student Mobility Awards
        </div>
      </div>
      <div className="datepb-part">
        <div className="open-part">
          <h5 className="open-left">Open Registration</h5> <h5 className="open-right">24 Jan 2023</h5>
        </div>
        <div className="close-part">
          <h5 className="close-left">Close Registration</h5> <h5 className="close-right">24 Jan 2023</h5>
        </div>
      </div>
    </div>
  );
};

export default CardPB;
