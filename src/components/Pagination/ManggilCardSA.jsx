import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../css/ManggilCardSA.css";
import CardSAList from "../Card/CardSAList";
import PaginationCardSA from "./PaginationCardSA";

const ManggilCardSA = ({data}) => {
  // const [beasiswaData, setBeasiswaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  // const [tagLevel, setTagLevel] = useState([]);
  // const [tagCost, setTagCost] = useState([]);
  // const [tagCountries, setTagCountries] = useState([]);

  // // ini ambil semua tag cost (tidak jadi di pakai)
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       "http://103.189.235.157:10015/api/tagCosts/"
  //     );
  //     setTagCost(response.data);
  //   }
  // });
  // // ini ambil semua tagLevel
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       "http://103.189.235.157:10015/api/tagLevels/"
  //     );
  //     setTagLevel(response.data);
  //   }
  // }, []);
  // // ini ambil data semua beasiswa
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       "http://103.189.235.157:10015/api/programs/"
  //     );
  //     setBeasiswaData(response.data);
  //   }
  // }, []);
  // ini ambil semua tagCountries
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await createAxiosInstance().get("api/tagLevels/1")
  //     console.log(response.data);
  //   }
  //   console.log("Ambil data");
  //   fetchData();
  // }, [])
  const [Program, setProgram] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        data
      );
      setProgram(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, [data]);
  // setProgram(datanya);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Program.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="manggilCardSA">
      <div className="semuanya-cardSA">
        <CardSAList beasiswaData={currentPosts} />
      </div>
      <div className="angka-pagination">
        <PaginationCardSA
          totalPosts={Program.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
export default ManggilCardSA;
