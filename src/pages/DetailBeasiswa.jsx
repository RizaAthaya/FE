import React from "react";
import "../css/DetailBeasiswa.css";

//components
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import DDDB1 from "../components/DropDownButton/DDDB1";
import DDDB2 from "../components/DropDownButton/DDDB2";

//assets
import iisma from "../assets/imageIISMA.svg";
import { Link } from "react-router-dom";

const DetailBeasiswa = (props) => {
  return (
    <div className="detailBeasiswa">
      <Navbar />
      <div className="whole-beasiswa">
        <div className="bread-crumb">
          <h3>
            <Link to="/">Home </Link>- <Link to="/pojokbeasiswa">Pojok Beasiswa</Link> - Detail
            Beasiswa
          </h3>
        </div>
        <div className="header-fullBeasiswa">
          <div className="penyelenggara-beasiswa">Kemdikbud</div>
          <div className="nama-beasiswa">
            IISMA : Indonesian International Student Mobility Awards
          </div>
          <div className="tags-beasiswa">
          <h3 className="tag-beasiswa">Fully Funded</h3>
          </div>
        </div>
        <hr />
        <div className="mid-fullBeasiswa">
          <h3 className="tentang-beasiswa">Tentang Beasiswa</h3>
          <div className="isi-midBeasiswa">
            <img src={iisma} className="img-fullBeasiswa"></img>
            <div className="isi-textBeasiswa">
              <h3 className="desc-beasiswafull">
                IISMA adalah adalah skema beasiswa dari Kementerian Pendidikan,
                Kebudayaan, Riset, dan Teknologi Republik Indonesia untuk
                membiayai pelajar Indonesia dalam program mobilitas satu
                semester di universitas terkemuka dan industri terkemuka di luar
                negeri.
              </h3>
              <div className="main-midBeasiswa">
                <div className="left-midBeasiswa">
                  <h3 className="univ-leftBeasiswa">Universitas Pilihan</h3>
                  <h3 className="listUniv-leftBeasiswa"></h3>
                </div>
                <div className="right-midBeasiswa">
                  <h3 className="prodi-rightBeasiswa">Program Studi Pilihan</h3>
                  <h3 className="listProdi-rightBeasiswa"></h3>
                </div>
              </div>
              <div className="akhir-midBeasiswa">
                <div className="open-beasiswa">
                  <h3 className="title-openBeasiswa">Open Registration</h3>
                  <h3 className="tanggal-openBeasiswa"></h3>
                </div>
                <hr />
                <div className="close-beasiswa">
                  <h3 className="title-closeBeasiswa">Close Registration</h3>
                  <h3 className="tanggal-closeBeasiswa"></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-beasiswa">
          <div className="ddBeasiswa1">
            <DDDB1 />
          </div>
          <div className="ddBeasiswa1">
            <DDDB2 />
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

export default DetailBeasiswa;
