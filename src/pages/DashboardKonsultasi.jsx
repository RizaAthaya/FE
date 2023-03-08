import React from "react";
import "./DashboardKelasSaya.css";
import "./DashboardKonsultasi.css";

//components
import NavbarDashboard from "../components/general/NavbarDashboard";
import FooterDashboard from "../components/general/FooterDashboard";
import CardKonsul from "../components/Card/CardKonsul";
import Sidebar from "../components/general/Sidebar";

//assets
import question from "../assets/question.svg";
import review from "../assets/Review.svg";


const DashboardKonsultasi = (props) => {
  return (
    <div className="dashboard">
      <NavbarDashboard />
      <Sidebar/>
      <div className="body-dashboard">
        <div className="atas-dashboard">
          <div className="header-dashboard">
            <h2 className="title-dashboard">
              Selamat datang Anda Bagas Aprianto!
            </h2>
            <h5 className="desc-dashboard">
              Semoga aktivitas belajarmu menyenangkan.
            </h5>
          </div>
        </div>
        <div className="main-konsultasi">
          <h3 className="title-konsultasi">Ajukan Konsultasi</h3>
          <div className="cards-konsul">
            <div className="card-konsul">
              <img src={question} className="img-konsul"></img>
              <h3 className="nama-cardKonsul">Tanya Mentor</h3>
            </div>
            <div className="card-konsul">
              <img src={review} className="img-konsul"></img>
              <h3 className="nama-cardKonsul">Review Dokumen</h3>
            </div>
          </div>
          <h3 className="title-konsultasi">Konsultasi Kamu</h3>
          <div className="kumpulan-konsul">
          <CardKonsul/>
          </div>
        </div>
      </div>

      <FooterDashboard />
    </div>
  );
};

export default DashboardKonsultasi;
