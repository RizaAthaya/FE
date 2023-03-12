import React from "react";

import CardSA from "./CardSA";
import "../../css/CardSAList.css";

const CardSAList = ({ beasiswaData}) => {
  return (
    <div className="cardSA-list">
      {beasiswaData.map((items, index) => {
        // {
        //   tagLevel((tags) => {
        //     // ini nyari mana yang id tagaLevel di programs == id di array tagLevel
        //     let getTags = "";
        //     for (let i = 0; i <= tagLevel.length(); i++) {
        //       if (tags.id == items.tag_level_id) {
        //         getTags = tags.name;
        //       }
        //     }
        //     {
        //       tagCost((tags2) => {
        //         // ini nyari mana yang id tagaLevel di programs == id di array tagCost
        //         let getTags2 = "";
        //         for (let i = 0; i<=tagCost.length(); i++){
        //             if (tags2.id == items.tag_cost_id){
        //                 getTags2 = tags.name;
        //             }
        //         }
                return (
                  <div className="total-cardSAnya">
                  <CardSA
                    key={index}
                    linkImg=""
                    tag1={items.tag_level.name}
                    tag2={items.tag_cost.name}
                    title={items.name}
                    harga={items.price}
                  />
                  </div>
                 );
              // });
            // }
          // });
        // }
      })}
    </div>
  );
};

export default CardSAList;
