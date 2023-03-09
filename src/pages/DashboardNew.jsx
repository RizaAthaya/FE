import React from "react";
import "./DashboardNew.css";

//components
import NavbarDashboard from "../components/general/NavbarDashboard";
import Review from "../assets/ReviewKonsul.svg";

//assets
import Question from "../assets/questionLAgi.svg";
import Review2 from "../assets/ReviewLagu.svg";

const DashboardNew = (props) => {
  return (
    <div className="new-Dash">
      <NavbarDashboard />
      <div className="whole-newDash">
        <h2 className="title-newDash">Selamat datang Anda Bagas Aprianto!</h2>
        <h3 className="desc-newDash">
          Semoga aktivitas belajarmu menyenangkan.
        </h3>
        <div className="boxes-dash">
          <div className="box-fullClass">
            <div className="title-fullClass">
              <img></img>
              <h3>Aktivitas Belajar</h3>
            </div>
            <hr />
            <div className="cards-class"></div>
          </div>
          <div className="boxes-konsultasi">
            <div className="box-pengajuan">
              <div className="title-pengajuan">
                <img className="img-title" src={Review}></img>
                <h3>Ajukan Konsultasi</h3>
              </div>
              <hr />
              <div className="cards-pengajuan">
                <div className="card-pengajuan1">
                  <img className="logo-pengajuan" src={Question}></img>
                  <h3>Tanya Mentor</h3>
                </div>
                <div className="card-pengajuan2">
                  <img className="logo-pengajuan" src={Review2}></img>
                  <h3>Review Dokumen</h3>
                </div>
              </div>
            </div>
            <div className="box-announce">
              <div className="title-announce">
                <img className="img-title" src={Review2}></img>
                <h3>Konsultasi Mendatang</h3>
              </div>
              <hr />
              <div className="cards-consultation"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNew;
