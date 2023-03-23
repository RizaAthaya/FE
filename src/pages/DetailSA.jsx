import React, { useEffect, useState } from "react";
import "../css/DetailSA.css";
import Navbar from "../components/general/Navbar";
import axios from "axios";

//assets
import Konten1 from "../assets/Konten1.svg";
// import Konten2 from "../assets/Konten2.svg";
import Konten2 from "../assets/KontenLagi.svg";
import Konten3 from "../assets/Konten3.svg";
import Konten4 from "../assets/Konten4.svg";
import Konten5 from "../assets/Konten5.svg";

//components
import { rupiahFormatter } from "../components/general/rupiahformatter";
import { Link, useParams } from "react-router-dom";

const DetailSA = (props) => {
  const [studyabroad, setStudyAbroad] = useState([]);
  const [mentor, setMentor] = useState([]);
  const [tagCountriesAll, setTagCountriesAll] = useState([]);
  const [tagCountriesOne, setTagCountriesOne] = useState([]);
  const [tagLevelAll, setTagLevelAll] = useState([]);
  const [tagLevel, setTagLevel] = useState("");
  const [tagCountries, setTagCountries] = useState("");

  const { id } = useParams();

  const getPerId = async () => {
    try {
      const response = await axios.get(
        `https://reyhafiz.aenzt.tech/api/programs/${id}`
      );
      setStudyAbroad(response.data.data);
      setMentor(response.data.data.mentor);
      setTagCountriesOne(response.data.data.tag_countries);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getTagLevel = async () => {
    try {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagLevels"
      );
      setTagLevelAll(response.data.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getTagCountries = async () => {
    try {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagCountries"
      );
      setTagCountriesAll(response.data.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getTagL = () => {
    for (let i = 0; i < tagLevelAll.length; i++) {
      if (studyabroad.tag_level_id == tagLevelAll[i].id) {
        setTagLevel(tagLevelAll[i].name);
        break;
      }
    }
  };
  const getTagCo = () => {
    let jumlah = 0;
    {
      tagCountriesAll.map((item) => {
        {
          tagCountriesOne.map((item2) => {
            if (item.id == item2.id) {
              setTagCountries(item.name);
              jumlah++;
            }
          });
        }
        if (jumlah > 1) {
          setTagCountries("Multiple Countries");
        }
      });
    }
  };
  useEffect(() => {
    getPerId();
    getTagLevel();
    getTagCountries();
  }, []);
  
  useEffect(() => {
    // AOS.init({
    //     delay: 2000,
    //     duration: 500
    // });
    setTimeout(() => {
      getTagL();
      getTagCo();
      console.log(tagCountries);
      console.log(tagLevel);
      console.log("tes");
    }, 1000);
    
}, [getTagL])
// useMemo(() => getTagL(), getTagCo(), [getTagL])

  return (
    <div className="detailpage-SA">
      <Navbar />
      <div className="whole-detailSA">
        <div className="bread-crumbSA">
          <h3>
            <Link to="/">Home </Link> -
            <Link to="/studyabroad"> Study Abroad</Link> - Detail
          </h3>
        </div>
        <div className="header-detailSA">
          <div className="bagian-kiri">
            <div className="tags-detailSA">
              <h3 className="tag-detailSA">{tagLevel}</h3>
              <h3 className="tag-detailSA">{tagCountries}</h3>
            </div>
            <div className="name-detailSA">{studyabroad.name}</div>
            <div className="akhir-headerSA">
              <button className="btn-daftarMentoring">Daftar Mentoring</button>
              <h3 className="harga-mentoring">
                {rupiahFormatter(studyabroad.price)}
              </h3>
              <h3 className="jumlah-anggota">{studyabroad.participant}</h3>
            </div>
          </div>
          <img
            className="img-detailSA"
            src={`https://reyhafiz.aenzt.tech/${studyabroad.image}`}
          ></img>
        </div>
        <hr />
        <div className="main-detailSA">
          <div className="box-kiriSA">
            <div className="box-descProgram">
              <h3 className="title-descProgram">Deskripsi Program</h3>
              <h3 className="desc-descProgram">{studyabroad.description}</h3>
            </div>
            <div className="box-kontenProgram">
              <h3 className="title-kontenProgram"> Konten Program</h3>
              <div className="atas-kontenProgram">
                <div className="bagian-konten">
                  <img src={Konten1} className="img-bagianKonten"></img>
                  <h3 className="text-konten">Modul Pembelajaran</h3>
                </div>
                <div className="bagian-konten">
                  <img src={Konten2} className="img-bagianKonten"></img>
                  <h3 className="text-konten">Video Pembelajaran</h3>
                </div>
                <div className="bagian-konten">
                  <img src={Konten3} className="img-bagianKonten"></img>
                  <h3 className="text-konten">Kelas Interaktif</h3>
                </div>
              </div>{" "}
              <br />
              <div className="bawah-kontenProgram">
                <div className="bagian-konten">
                  <img src={Konten4} className="img-bagianKonten"></img>
                  <h3 className="text-konten">Tanya Mentor</h3>
                </div>
                <div className="bagian-konten">
                  <img src={Konten5} className="img-bagianKonten"></img>
                  <h3 className="text-konten">Review Dokumen</h3>
                </div>
              </div>
            </div>
            <div className="box-tentangMentor">
              <div>
                <h3 className="title-tentangMentor">Tentang Mentor</h3>
                <div className="isi-tentangMentor">
                  <img
                    className="img-tentangMentor"
                    src={`https://reyhafiz.aenzt.tech/${mentor.image}`}
                  ></img>
                  <div className="text-tentangMentor">
                    <h3 className="mentor-name">{mentor.name}</h3>
                    <h3 className="mentor-lulusan">{mentor.study_track}</h3>
                    <h3 className="mentor-tag">{mentor.scholar_history}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-kananSA">
            <h3 className="title-boxKanan">
              Yuk, segera bergabung dan raih impianmu bersama kami!
            </h3>
            <Link to="/login">
              <button className="btn-boxKanan">Daftar Mentoring</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSA;
