import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../css/ManggilCardPB.css";
import CryptoList from "./CryptoList";
// import Pagination from "./PaginationPB";
import CardArtikelList from "../Card/CardArtikelList";
import PaginationCardArtikel from "./PaginationCardArtikel";

const ManggilCardArtikel = ({datanyaLagi}) => {
  const [ArtikelData, setArtikelData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        datanyaLagi
      );
      setArtikelData(response.data.data);
      console.log(response);
    }
    fetchData();
    // setArtikelData(datanya);

  }, [datanyaLagi]);
  // setArtikelData(datanya);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = ArtikelData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="manggilCardArtikel">
      <CardArtikelList CardArtikels={currentPosts} />
      <div className="angka-pagination">
        <PaginationCardArtikel
          totalPosts={ArtikelData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ManggilCardArtikel;
