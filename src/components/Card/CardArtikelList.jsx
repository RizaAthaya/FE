import React from "react";
// import CardPB from './CardPB';
import "../../css/CardArtikel.css";
import "../../css/CardArtikelList.css";

import CardArtikel from "./CardArtikel";
import { useNavigate } from "react-router";

const CardArtikelList = ({ CardArtikels }) => {
  let navigate = useNavigate();
  return (
    <div className="cardPB-list">
      {/** {tag_level, tag_cost, scholarship_provider, name, close_registration, open_registration}*/}
      {CardArtikels.map((item, index) => {
        return (
          <div
            key={index}
          >
            <CardArtikel
              key={index}
              id={item.id}
              foto={item.image}
              tag_artikel={item.tag_article.name}
              title={item.title}
              created={item.created_at}
              description={item.brief_description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardArtikelList;
