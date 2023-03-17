import React, { useState, useEffect } from "react";
import "../css/DashboardNew.css";
import axios from "axios";
import { Link } from "react-router-dom";

//components
// import NavbarDashboard from "../components/general/NavbarDashboard";
import Navbar2 from "../components/general/Navbar2";
import Review from "../assets/ReviewKonsul.svg";
import CardKonsul from "../components/Card/CardKonsul";
import CardKelas from "../components/Card/CardKelas";
import CardPopUp from "../components/Card/CardPopUp";
import CardPopUp2 from "../components/Card/CardPopUp2";

//assets
import exit from "../assets/VectorExit.svg";
import Question from "../assets/questionLAgi.svg";
import Review2 from "../assets/ReviewLagu.svg";
import Aktivitas from "../assets/Aktivitas.svg";

const DashboardNew = (props) => {
  const [Nama, setNama] = useState("");
  const [semua, setSemua] = useState([]);
  const [error, setError] = useState("");
  const [Show, setShow] = useState(false);
  const [konsultasi, setKonsultasi] = useState([]);
  const handleClick = () => {
    setShow(!Show);
  };
  const [Show2, setShow2] = useState(false);
  const handleClick2 = () => {
    setShow2(!Show2);
  };
  useEffect(() => {
    const localStore = localStorage.getItem("token");
    const token = localStore;
    async function fetchData() {
      const response = await axios
        .get("https://reyhafiz.aenzt.tech/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log(response);
          const data = response.data;
          // console.log(data)
          setNama(data.data.name);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data);
        });
    }
    fetchData();
  }, []);
  useEffect(() => {
    const localStore = localStorage.getItem("token");
    const token = localStore;
    const handleUser = () => {
      axios
        .get("https://reyhafiz.aenzt.tech/api/users/programs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          console.log(response.data.data);
          setSemua(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data);
        });
    };
    handleUser();
    console.log(semua)
  }, []);

  useEffect(() => {
    const localStore = localStorage.getItem("token");
    const token = localStore;
    const handleUser = () => {
      axios
        .get("https://reyhafiz.aenzt.tech/api/consultations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          console.log(response.data.data);
          setKonsultasi(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data);
        });
    };
    handleUser();
  }, []);
  console.log(konsultasi)

  return (
    <div className="new-Dash">
      <Navbar2 />
      <div className="whole-newDash">
        <div className="titlepart-newDash">
          <h2 className="title-newDash">{`Selamat datang ${Nama}!`} </h2>
          <h3 className="desc-newDash">
            Semoga aktivitas belajarmu menyenangkan.
          </h3>
        </div>

        <div className="boxes-dash">
          <div className="box-fullClass">
            <div className="title-fullClass">
              <img src={Aktivitas} className="fullClassLogo"></img>
              <h3>Aktivitas Belajar</h3>
            </div>
            <hr />
            <div className="cards-class">
              {semua.map((item) => (
                <div className="card-kelas">
                  <img
                    className="img-kelas"
                    src={`https://reyhafiz.aenzt.tech${item.image}`}
                  ></img>
                  <div className="kotak-cardK">
                    <div className="part-cardKelas">
                      <h2 className="text-kelas">{item.name}</h2>
                      <div className="bar-kelas"></div>
                    </div>
                    <Link to="/modul">
                      <button className="btn-cardKelas">Mulai Belajar</button>
                    </Link>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          <div className={`tanyaMentor-${Show}`}>
            <img className="btn-exitTM" src={exit} onClick={handleClick}></img>
            <CardPopUp />
          </div>
          <div className={`reviewDokumen-${Show2} RD`}>
            <img className="btn-exitTM" src={exit} onClick={handleClick2}></img>
            <CardPopUp2 />
          </div>
          <div className="boxes-konsultasi">
            <div className="box-pengajuan">
              <div className="title-pengajuan">
                <img className="img-title" src={Review}></img>
                <h3>Ajukan Konsultasi</h3>
              </div>
              <hr />
              <div className="cards-pengajuan">
                <div className="card-pengajuan1" onClick={handleClick}>
                  <img className="logo-pengajuan" src={Question}></img>
                  <h3>Tanya Mentor</h3>
                </div>

                <div className="card-pengajuan2" onClick={handleClick2}>
                  <img className="logo-pengajuan" src={Review2}></img>
                  <h3>Review Dokumen</h3>
                </div>
              </div>
            </div>
            <div className="box-announce">
              <div className="title-announce">
                <img className="img-title" src={Review}></img>
                <h3>Konsultasi Mendatang</h3>
              </div>
              <hr />

              <div className="cards-consultation">
              {konsultasi.map(()=>(
                <CardKonsul dataKonsul={konsultasi} />
              ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNew;
