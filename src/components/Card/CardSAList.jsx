import React from "react";

import CardSA from "./CardSA";
import "./CardSAList.css";

const CardSAList = ({ beasiswaData, tagCost, tagLevel }) => {
  return (
    <div className="cardSA-list">
      {beasiswaData.map((items, index) => {
        {
          tagLevel((tags) => {
            // ini nyari mana yang id tagaLevel di programs == id di array tagLevel
            let getTags = "";
            for (let i = 0; i <= tagLevel.length(); i++) {
              if (tags.id == items.tag_level_id) {
                getTags = tags.name;
              }
            }
            {
              tagCost((tags2) => {
                // ini nyari mana yang id tagaLevel di programs == id di array tagCost
                let getTags2 = "";
                for (let i = 0; i<=tagCost.length(); i++){
                    if (tags2.id == items.tag_cost_id){
                        getTags2 = tags.name;
                    }
                }
                return (
                  <CardSA
                    key={index}
                    linkImg=""
                    tag1={getTags}
                    tag2={getTags2}
                    title={items.name}
                    harga={items.price}
                  />
                );
              });
            }
          });
        }
      })}
    </div>
  );
};

export default CardSAList;
