import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ManggilCardSA.css";
import CardSAList from "../Card/CardSAList";
import PaginationCardSA from "./PaginationCardSA";

const ManggilCardSA = () => {
  const [beasiswaData, setBeasiswaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [tagLevel, setTagLevel] = useState([]);
  const [tagCost, setTagCost] = useState([]);
  const [tagCountries, setTagCountries] = useState([]);

  // ini ambil semua tag cost tidak jadi di pakai
  // useEffect (async () => {
  //   const response = await axios.get("http://127.0.0.1:8000/api/tagCosts/");
  //   setTagCost(response.data);
  // })
  // ini ambil semua tagLevel
  useEffect(async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/tagLevels/");
    setTagLevel(response.data);
  }, [])
  // ini ambil data semua beasiswa
  useEffect(async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/programs/");
    setBeasiswaData(response.data);
  }, []);
  // ini ambil semua tagCountries


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="manggilCardSA">
      <CardSAList beasiswaData={currentPosts} tagCost={tagCost} tagLevel={tagLevel} />
      <PaginationCardSA
        totalPosts={beasiswaData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
