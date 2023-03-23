import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../css/ManggilCardPB.css";
import Pagination from "./PaginationPB";
import CardPBList from "../Card/CardPBList";

const ManggilCardPB = ({dataLink}) => {
  const [PBData, setPBData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);


  const getData = async () => {
    try{
      const response = await axios.get(
        dataLink
       );
       setPBData(response.data.data);
       console.log(response.data);
       console.log(response.data.data)
    } catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, [dataLink]);

  // setPBData(dataBeasiswa);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = PBData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="manggilCardPB">
      <CardPBList CardBeasiswa={currentPosts} />
      <div className="angka-pagination">
        <Pagination
          totalPosts={PBData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ManggilCardPB;
