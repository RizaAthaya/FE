import React, { Component } from "react";
import Scroll from "react-scroll";
import "./DashboardKelasSaya.css";

//components
import NavbarDashboard from "../components/general/NavbarDashboard";
import CardKelas from "../components/Card/CardKelas";
import Sidebar from "../components/general/Sidebar";
import FooterDashboard from "../components/general/FooterDashboard";

const ScrollLink = Scroll.ScrollLink;

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <NavbarDashboard />
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
        <div className="main-kelas">
          <h3 className="title-kelas"> Aktivitas Belajar</h3>

          <div className="cards-class">
            <CardKelas />
          </div>
        </div>
      </div>
      <FooterDashboard />
    </div>
  );
};

export default Dashboard;
