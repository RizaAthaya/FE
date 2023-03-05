import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ManggilCardSA.css";
import CardSAList from "../Card/CardSAList";
import PaginationCardSA from "./PaginationCardSA";

const ManggilCardSA = () => {
  const [beasiswaData, setBeasiswaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/programs/1");
    setBeasiswaData(response.data);
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="manggilCardSA">
      <CardSAList beasiswaData={currentPosts} />
      <PaginationCardSA
        totalPosts={beasiswaData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
