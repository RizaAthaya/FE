import React from "react";
import { Link } from "react-router-dom";
import "../css/Artikel.css";

//components
// import TagArtikel from "../components/general/TagArtikel";
// import ButtonGroup from "../components/general/ButtonGroup";
import CardArtikel from "../components/Card/CardArtikel";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import ManggilCardArtikel from "../components/Pagination/ManggilCardArtikel";

//assets
import profile from "../assets/ProfileWhite.svg";
// import clock from "../assets/ClockWhite.svg";

//button grup

const ButtonGroup = (props) => {
  const allData = [
    { id: 1, name: "Semua", link: "https://reyhafiz.aenzt.tech/api/articles"},
    { id: 2, name: "Tips dan Trick", link: "https://reyhafiz.aenzt.tech/api/articles" },
    { id: 3, name: "Inspirasi", link: "https://reyhafiz.aenzt.tech/api/articles" },
    { id: 4, name: "Pendidikan", link: "https://reyhafiz.aenzt.tech/api/articles" },
    { id: 5, name: "Kehidupan", link: "https://reyhafiz.aenzt.tech/api/articles" },
    { id: 6, name: "Bahasa dan Budaya", link: "https://reyhafiz.aenzt.tech/api/articles" },
  ];
  const [Aktif, setAktif] = useState({
    activeObject: allData[0],
    objects: allData,
  });
  function toggleActive(index) {
    setAktif({ ...Aktif, activeObject: Aktif.objects[index] });
  }
  function toggleActiveStyle(index) {
    if (Aktif.objects[index] === Aktif.activeObject) {
      return "tag-artikel active";
    } else {
      return "tag-artikel inactive";
    }
  }
  return (
    <div className="button-group">
      {Aktif.objects.map((elements, index) => (
        <div
          key={index}
          className={toggleActiveStyle(index)}
          onClick={() => {
            toggleActive(index);
          }}
        >
          <h3 className="text-tagArtikel">{elements.name}</h3>
        </div>
      ))}
    </div>
  );
};

//aslinya

const Artikel = (props) => {
  return (
    <div className="whole-artikel">
      <Navbar />
      <div className="atas-artikel">
        <div className="bread-crumb">
          <h3>
            <Link to="/">Home</Link> - Artikel
          </h3>
        </div>
        <div className="header-artikel">
          <h5 className="tag-artikel">Tips dan Trik</h5>
          <h3 className="title-artikel">7 Persiapan Kuliah di Luar Negeri</h3>
          <div className="whole-textArtikel">
            <div className="pembuat-artikel">
              <img className="logo-pembuatArtikel" src={profile}></img>
              <h3>Riza Athaya</h3>
            </div>
            <div className="pembuat-artikel">
              <img className="logo-pembuatArtikel" src=""></img>
              <h3>13 Jan 2023</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="main-artikel">
        <h3 className="title-mainArtikel">Artikel Lainnya</h3>
        <div className="tags-artikel">
          <ButtonGroup />
          
        </div>
        <ManggilCardArtikel />
      </div>
      <Footer />
    </div>
  );
};

export default Artikel;
