import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../css/DetailBeasiswa.css";

//components
import Navbar from "../components/general/Navbar2";
import Footer from "../components/general/Footer";
import DDDB1 from "../components/DropDownButton/DDDB1";
import DDDB2 from "../components/DropDownButton/DDDB2";

//assets
import iisma from "../assets/imageIISMA.svg";
import { Link, useParams } from "react-router-dom";

const DetailBeasiswaLogin = (props) => {
  const [beasiswa, setBeasiswa] = useState([]);
  const { id } = useParams();

  const getPerId = async () => {
    try {
      const response = await axios.get(
        `https://reyhafiz.aenzt.tech/api/scholarships/${id}`
      );
      setBeasiswa(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPerId();
  }, []);
  return (
    <div className="detailBeasiswa">
      <Navbar />
      <div className="whole-beasiswa">
        <div className="bread-crumb">
          <h3>
            <Link to="/home">Home </Link>-{" "}
            <Link to="/pojokbeasiswa">Pojok Beasiswa</Link> - Detail Beasiswa
          </h3>
        </div>
        <div className="header-fullBeasiswa">
          <div className="penyelenggara-beasiswa">
            {beasiswa.scholarship_provider}
          </div>
          <div className="nama-beasiswa">{beasiswa.name}</div>
          <div className="tags-beasiswa">
            <h3 className="tag-beasiswa">Fully Funded</h3>
          </div>
        </div>
        <hr />
        <div className="mid-fullBeasiswa">
          <h3 className="tentang-beasiswa">Tentang Beasiswa</h3>
          <div className="isi-midBeasiswa">
            <img
              src={`https://reyhafiz.aenzt.tech/${beasiswa.image}`}
              className="img-fullBeasiswa"
            ></img>
            <div className="isi-textBeasiswa">
              <h3 className="desc-beasiswafull">{beasiswa.description}</h3>
              <div className="main-midBeasiswa">
                <div className="left-midBeasiswa">
                  <h3 className="univ-leftBeasiswa">Universitas Pilihan</h3>
                  <h3 className="listUniv-leftBeasiswa">
                    {beasiswa.university}
                  </h3>
                </div>
                <div className="right-midBeasiswa">
                  <h3 className="prodi-rightBeasiswa">Program Studi Pilihan</h3>
                  <h3 className="listProdi-rightBeasiswa">
                    {beasiswa.study_program}
                  </h3>
                </div>
              </div>
              <div className="akhir-midBeasiswa">
                <div className="open-beasiswa">
                  <h3 className="title-openBeasiswa">Open Registration</h3>
                  <h3 className="tanggal-openBeasiswa">
                    {beasiswa.open_registration}
                  </h3>
                </div>
                <hr />
                <div className="close-beasiswa">
                  <h3 className="title-closeBeasiswa">Close Registration</h3>
                  <h3 className="tanggal-closeBeasiswa">
                    {beasiswa.close_registration}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-beasiswa">
          <div className="ddBeasiswa1">
            <DDDB1 data={beasiswa} />
          </div>
          <div className="ddBeasiswa1">
            <DDDB2 data={beasiswa} />
          </div>
        </div>
        <div className="tambahan-fullBeasiswa">
          <h3 className="title-tambahan"> Lebih Banyak Informasi</h3>
          <h3 className="kunjungi-page"> Kunjungi iisma.kemdikbud.go.id</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailBeasiswaLogin;
