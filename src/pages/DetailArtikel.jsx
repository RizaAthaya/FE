import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Footer from "../components/general/Footer";
import "../css/DetailArtikel.css";
import imgArtikel from "../assets/img-artikel.svg";
import { useNavigate, useParams } from "react-router-dom";

//component
import CardArtikel from "../components/Card/CardArtikel";
import Navbar from "../components/general/Navbar";

//assets
import Clock from "../assets/Clock.svg";
import Profile from "../assets/Profile.svg";
// import { artikelContext } from "../components/api/artikelContext";

const DetailArtikelLogin = () => {
  const [Artikel, setArtikel] = useState([]);
  const [tagArtikel, setTagArtikel] = useState([]);
  const [ArtikelData, setArtikelData] = useState([]);
  // const {setArtikel, setArtikelData, setTagArtikel} = useContext(artikelContext);
  const { id } = useParams();

  const getRecommend = async () => {
    try {
      const response = await axios.get(
        `https://reyhafiz.aenzt.tech/api/articles/${id}/recomend`
      );
      setArtikelData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPerId = async () => {
    try {
      const response = await axios.get(
        `https://reyhafiz.aenzt.tech/api/articles/${id}`
      );
      setArtikel(response.data.data);
      setTagArtikel(response.data.data.tag_article);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPerId();
    getRecommend();
  }, []);
  let navigate = useNavigate();
  const handleClick = ({ id }) => {
    if (window.localStorage.getItem("token")) {
      navigate(`/detailartikellogin/${id}`);
    } else {
      navigate(`/detailartikel/${id}`);
    }
  };
  return (
    <div className="semua-DA">
      <Navbar className="nav-DA" />
      <div className="detail-artikel2">
        <div className="bread-crumb"> Beranda - Artikel - judul Artikel</div>
        <div className="whole-artikel2">
          <div className="header2-artikel">
            <div className="tag2-artikel">{tagArtikel.name}</div>

            <div className="title2-artikel">{Artikel.title}</div>
            <div className="tanggal2-artikel">{Artikel.updated_at}</div>
          </div>
          <div className="body2-artikel">
            <img
              className="imgBig2-artikel"
              src={`https://reyhafiz.aenzt.tech${Artikel.image}`}
            ></img>
            <div className="isi2-artikel">{Artikel.description}</div>
            <div className="artikel2-lainnya">
              <hr />
              <h2 className="title-sec2"> Artikel Lainnya</h2>
              <div className="semua-hasil">
                {ArtikelData.map((item) => (
                  <div className="card-artikel">
                    <img
                      className="img-artikel"
                      src={`https://reyhafiz.aenzt.tech${item.image}`}
                    ></img>
                    <div className="textpart-a">
                      <h5 className="tag-artikel">{item.tag_artikel}</h5>
                      <h3 className="title-ca">{item.title}</h3>
                      <div className="part-artikel">
                        <img className="clock-icon" src={Clock}></img>
                        <h6 className="text-a">{item.created_at}</h6>
                      </div>
                      <h6 className="desc-artikel">{item.brief_description}</h6>
                      <button
                        className="btn-artikel"
                        key={item.id}
                        // onClick={() => handleClick(`${item.id}`)}
                      >
                        Baca lebih lanjut
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DetailArtikelLogin;
