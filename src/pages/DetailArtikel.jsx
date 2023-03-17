import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/general/Footer";
import "../css/DetailArtikel.css";
import imgArtikel from "../assets/img-artikel.svg";

//component
import CardArtikel from "../components/Card/CardArtikel";
import Navbar from "../components/general/Navbar";

//assets
import Clock from "../assets/Clock.svg";
import Profile from "../assets/Profile.svg";

const DetailArtikelLogin = ({id}) => {
  const [Artikel, setArtikel] = useState([]);
  const [tagArtikel, setTagArtikel] = useState([]);
  const [ArtikelData, setArtikelData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/articles/1/recomend"
      );
      setArtikelData(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/articles/1"
      );
      setArtikel(response.data.data);
      setTagArtikel(response.data.data.tag_artikel)
      console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="semua-DA">
      <Navbar className="nav-DA" />
      <div className="detail-artikel2">
        <div className="bread-crumb"> Beranda - Artikel - judul Artikel</div>
        <div className="whole-artikel2">
          <div className="header2-artikel">
            <div className="tag2-artikel">Tips and Trick</div>
            <div className="title2-artikel">
              {Artikel.title}
            </div>
            <div className="tanggal2-artikel">{Artikel.updated_at}</div>
          </div>
          <div className="body2-artikel">
            <img className="imgBig2-artikel" src={`https://reyhafiz.aenzt.tech${Artikel.image}`}></img>
            <div className="isi2-artikel">
              {Artikel.description}
            </div>
            <div className="artikel2-lainnya">
              <hr />
              <h2 className="title-sec2"> Artikel Lainnya</h2>
              <div className="semua-hasil">
                {ArtikelData.map((item) => (
                  <div className="card-artikel">
                    <img className="img-artikel"></img>
                    <div className="textpart-a">
                      <h5 className="tag-artikel">{item.tag_artikel}</h5>
                      <h3 className="title-ca">{item.title}</h3>
                      <div className="part-artikel">
                        <img className="people-icon" src={Profile}></img>
                        <h6 className="text-a">{item.penulis}</h6>
                        <img className="clock-icon" src={Clock}></img>
                        <h6 className="text-a">{item.created}</h6>
                      </div>
                      <h6 className="desc-artikel">{item.brief_description}</h6>
                      <button className="btn-artikel">Baca lebih lanjut</button>
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
