import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ManggilCardPB.css";
import CryptoList from "./CryptoList";
// import Pagination from "./PaginationPB";
import CardArtikelList from "../Card/CardArtikelList";
import PaginationCardArtikel from "./PaginationCardArtikel";

const ManggilCardArtikel = () => {
  const [ArtikelData, setArtikelData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/articles"
      );
      setArtikelData(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

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
