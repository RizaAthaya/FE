import React, { useEffect, useState } from "react";
import CardPB from "./CardPB";
import "../../css/CardPB.css";
import "../../css/CardPBList.css";
import axios from "axios";

const CardPBList = ({ CardBeasiswa }) => {
  const [tagLevelAll, setTagLevelAll] = useState([]);
  const [tagCountriesAll, setTagCountriesAll] = useState([]);
  const [tagCostsAll, setTagCostsAll] = useState([]);
  let getTagL = "";
  let getTagC = "";
  let getTagCo = "";
  const getScholarships = async () => {
    try {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/scholarships/new"
      );
      setNewPB(response.data.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getTagLevel = async () => {
    try {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagLevels"
      );
      setTagLevelAll(response.data.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getTagCost = async () => {
    try {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagCosts"
      );
      setTagCostsAll(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getTagCountries = async () => {
    try {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagCountries"
      );
      setTagCountriesAll(response.data.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getScholarships();
    getTagLevel();
    getTagCost();
  }, []);
  return (
    <div className="cardPB-list">
      {/** {tag_level, tag_cost, scholarship_provider, name, close_registration, open_registration}*/}
      {CardBeasiswa.map((item, index) => {
        {
          tagLevelAll.map((tags) => {
            if (tags.id == item.tag_level_id) {
              getTagL = tags.name;
            }
          });
        }
        {
          tagCostsAll.map((tags) => {
            if (tags.id == item.tag_cost_id) {
              getTagC = tags.name;
            }
          });
        }
        {
          if (item.tag_countries.length > 1) {
            getTagCo = "Multiple countries";
          } else {
            item.tag_countries.map((item) => (getTagCo = item.name));
          }
        }
        return (
          <CardPB
            key={index}
            id={item.id}
            tag_level={getTagL}
            tag_cost={getTagC}
            tag_countries={getTagCo}
            scholarship_provider={item.scholarship_provider}
            name={item.name}
            close_registration={item.close_registration}
            open_registration={item.open_registration}
          />
        );
      })}
    </div>
  );
};

export default CardPBList;
