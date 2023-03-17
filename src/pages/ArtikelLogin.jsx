import React from "react";
import { Link } from "react-router-dom";
import "../css/Artikel.css";

//components
// import TagArtikel from "../components/general/TagArtikel";
import ButtonGroup from "../components/general/ButtonGroup";
import CardArtikel from "../components/Card/CardArtikel";
import Navbar from "../components/general/Navbar2";
import Footer from "../components/general/Footer";
import ManggilCardArtikel from "../components/Pagination/ManggilCardArtikel";

const ArtikelLogin = (props) => {
  const [Show, setShow] = useState(true);
  const [Show2, setShow2] = useState(false);
  const [Show3, setShow3] = useState(false);
  const [Show4, setShow4] = useState(false);
  const [Show5, setShow5] = useState(false);
  const [Show6, setShow6] = useState(false);
  const [link, setLink] = useState("https://reyhafiz.aenzt.tech/api/articles");

  const handlerShow = () => {
    setShow(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setLink("https://reyhafiz.aenzt.tech/api/articles");
    console.log(link);
  };
  const handlerShow2 = () => {
    setShow(false);
    setShow2(true);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setLink("https://reyhafiz.aenzt.tech/api/articles/tagArticles/1");
    console.log(link);
  };
  const handlerShow3 = () => {
    setShow(false);
    setShow2(false);
    setShow3(true);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setLink("https://reyhafiz.aenzt.tech/api/articles/tagArticles/2");
    console.log(link);
  };
  const handlerShow4 = () => {
    setShow(false);
    setShow2(false);
    setShow3(false);
    setShow4(true);
    setShow5(false);
    setShow6(false);
    setLink("https://reyhafiz.aenzt.tech/api/articles/tagArticles/3");
    console.log(link);
  };

  const handlerShow5 = () => {
    setShow(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(true);
    setShow6(false);
    setLink("https://reyhafiz.aenzt.tech/api/articles/tagArticles/4");
    console.log(link);
  };
  const handlerShow6 = () => {
    setShow(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(true);
    setLink("https://reyhafiz.aenzt.tech/api/articles/tagArticles/5");
    console.log(link);
  };
  return (
    <div className="whole-artikel">
      <Navbar />
      <div className="atas-artikel">
        <div className="bread-crumb">
          <h3>
            <Link to={"/home"}>Home</Link> - Artikel
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
          <button className={`tag-artikel${Show}`} onClick={handlerShow}>
            Semua
          </button>
          <button className={`tag-artikel${Show2}`} onClick={handlerShow2}>
            Tips dan Trick
          </button>
          <button className={`tag-artikel${Show3}`} onClick={handlerShow3}>
            Inspirasi
          </button>
          <button className={`tag-artikel${Show4}`} onClick={handlerShow4}>
            Pendidikan
          </button>
          <button className={`tag-artikel${Show5}`} onClick={handlerShow5}>
            Kehidupan
          </button>
          <button className={`tag-artikel${Show6}`} onClick={handlerShow6}>
            Bahasa dan Budaya
          </button>
        </div>
        <ManggilCardArtikel datanyaLagi={link} />
      </div>
      <Footer />
    </div>
  );
};

export default ArtikelLogin;
