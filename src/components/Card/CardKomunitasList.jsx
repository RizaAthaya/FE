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
            waktu={item.updated_at}
            judul={item.title}
            desc={item.comment}
            tags={item.tag_discussion}
            reply={item.reply_count} 
          />
        );
      })}
    </div>
  );
};

export default CardKomunitasList;
