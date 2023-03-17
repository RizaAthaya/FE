import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../css/ManggilCardPB.css";
import Pagination from "./PaginationPB";
import CardPBList from "../Card/CardPBList";

const ManggilCardPB = () => {
  const [PBData, setPBData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/scholarships"
      );
      setPBData(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

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
