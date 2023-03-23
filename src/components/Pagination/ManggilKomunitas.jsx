import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/ManggilKomunitas.css";
import "../../css/ManggilCardPB.css";
// import CryptoList from "./CryptoList";
// import Pagination from "./PaginationPB";
import PaginationKomunitas from "./PaginationKomunitas";
// import CardPBList from "../Card/CardPBList";
import CardKomunitasList from "../Card/CardKomunitasList";

const ManggilKomunitas = ({data}) => {
  const [KomunitasData, setKomunitasData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  
  const getData = async () => {
    try{
      const response = await axios.get(
        data
       );
       setKomunitasData(response.data.data);
       console.log(response.data);
       console.log(response.data.data)
    } catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, [data]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       data
  //     );
  //     setKomunitasData(response.data.data);
  //     console.log(response.data);
  //   }
  //   fetchData();
  // }, [data]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = KomunitasData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="manggilKomunitas">
      <CardKomunitasList KomunitasData={currentPosts} />
      <div className="angka-pagination">
        <PaginationKomunitas
          totalPosts={KomunitasData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ManggilKomunitas;
