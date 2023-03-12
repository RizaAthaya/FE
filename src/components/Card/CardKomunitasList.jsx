import React from "react";
import "../../css/CardKomunitasList.css";
import CardKomunitas from "./CardKomunitas";

const CardKomunitasList = ({ KomunitasData }) => {
  return (
    <div className="cardKomunitas-list">
      {KomunitasData.map((item, index) => {
        return (
          <CardKomunitas
            key={index}
            nama={item.user.name}
            waktu={item.user.created_at}
            judul={item.title}
            desc={item.comment}
            tag1=""
            tag2=""
            reply=""
          />
        );
      })}
    </div>
  );
};

export default CardKomunitasList;
