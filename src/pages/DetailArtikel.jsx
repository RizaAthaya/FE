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

const DetailArtikelLogin = (props) => {
  const [ArtikelData, setArtikelData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/articles"
      );
      setArtikelData(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="semua-DA">
      <Navbar  className="nav-DA"/>
      <div className="detail-artikel2">
        <div className="bread-crumb"> Beranda - Artikel - judul Artikel</div>
        <div className="whole-artikel2">
          <div className="header2-artikel">
            <div className="tag2-artikel">Pendidikan</div>
            <div className="title2-artikel">
              Mengenal Sistem Pendiidikan Luar Negeri
            </div>
            <div className="tanggal2-artikel">13 Nov 2022</div>
          </div>
          <div className="body2-artikel">
            <img className="imgBig2-artikel" src={imgArtikel}></img>
            <div className="isi2-artikel">
              Lorem ipsum dolor sit amet consectetur. Aliquam sociis nibh
              imperdiet amet habitant scelerisque phasellus nisi sed. Ipsum duis
              adipiscing urna tempus. Vestibulum nam morbi urna tellus. Dolor
              enim pretium nulla aenean libero. Accumsan id a placerat
              fringilla. Aliquet velit morbi quam imperdiet ipsum id magna
              eleifend. Eget iaculis eget cras consequat donec. Purus purus
              cursus et amet ac semper. Velit sit egestas cursus cursus. Aliquam
              scelerisque semper iaculis dui. Hendrerit mauris mauris blandit
              commodo vitae gravida. Augue at magna tempus porta ultrices
              integer imperdiet dolor purus. Euismod cras vel duis et
              consectetur felis nulla. Vulputate quam scelerisque cursus tortor
              nunc massa tortor tellus. Ac ac mauris phasellus quis lacinia
              nulla ac enim. Eu arcu morbi elit quam tristique blandit commodo
              ipsum scelerisque. Aliquam malesuada magna tincidunt ut elementum
              tortor vitae eu neque. Senectus facilisis mi amet morbi non.
              Congue elementum diam congue ac. Convallis arcu orci pellentesque
              sem aliquam id nunc ac. Purus sed nascetur tellus nunc sed. Eu
              tristique venenatis non pellentesque nisl proin. Dolor commodo
              tellus leo felis arcu amet eleifend. Dui aliquet diam odio
              pellentesque ut congue in diam pellentesque. Cursus arcu quis sit
              ultrices tempus vulputate non ultricies. Scelerisque dictumst
              rhoncus amet id nulla accumsan interdum nisl pellentesque. Purus
              ultrices praesent consequat ac aliquet mauris gravida libero.
              Dolor faucibus suscipit mauris amet rhoncus. A eu diam id viverra
              fermentum nunc ligula nisi magna. Cum massa at neque est augue
              faucibus ante mi. Egestas pharetra sed faucibus fames faucibus
              pellentesque. Elit vulputate potenti molestie massa imperdiet
              curabitur sed. Vestibulum netus vitae semper cursus bibendum
              euismod. Nec volutpat eleifend massa bibendum. Convallis nisl
              lacus varius nec sit. Eleifend arcu volutpat pellentesque erat at
              luctus integer adipiscing lobortis. Proin adipiscing non quis
              placerat proin donec velit dui. Malesuada nulla ac purus enim.
              Quis quis gravida pharetra quis convallis faucibus luctus. Viverra
              gravida quam integer porttitor amet. Ullamcorper nunc pharetra
              vitae molestie aliquet donec sit arcu. Lectus enim orci in velit
              elementum malesuada volutpat. Feugiat enim eu quam tempus. Eget
              arcu at morbi diam. Eget ac varius ut vehicula eget nam amet
              egestas. Luctus metus proin aliquam maecenas luctus elementum
              ornare urna scelerisque. Urna eget feugiat fringilla ornare mattis
              gravida pellentesque ut. Orci scelerisque varius hendrerit aenean
              posuere lectus massa ornare. Mi vel donec turpis amet pellentesque
              cum habitasse dignissim. Lectus sit neque fames vel morbi diam.
              Enim consequat quam bibendum vitae orci. Tempor neque vitae sit
              sit massa. Urna nisl amet gravida leo urna rhoncus scelerisque
              dignissim arcu. Porta cras nibh montes blandit et euismod. Enim
              urna maecenas ullamcorper neque. Volutpat turpis tempus integer
              porttitor. Curabitur sed at pharetra arcu eu. Elementum ac in sit
              id amet nisi. Non proin quis enim a tempor mattis proin ut. Diam
              nunc tellus pulvinar quis ultricies. Eget ullamcorper convallis
              tempus proin odio dapibus dignissim. Etiam sapien donec dapibus
              neque arcu euismod eu. Convallis adipiscing dui fringilla elit
              quis egestas tellus dui. Laoreet placerat ac sagittis sed
              scelerisque. Aenean nulla neque consequat elementum tempor
              penatibus. Diam turpis in pulvinar in eget leo luctus mi. Fusce
              amet sed lacus magna. Ornare diam scelerisque enim id. Quam nibh
              enim tempor bibendum amet vulputate quis risus. Nulla vulputate
              interdum montes senectus lorem at. Suscipit a praesent
              sollicitudin interdum aliquet vitae. Varius facilisis duis purus
              lorem in id eu. Imperdiet tempor neque consectetur nibh sodales.
              Nam id quis etiam risus nunc tellus. Quisque lectus eget blandit
              nec. Lorem consequat potenti diam velit ut. Odio auctor netus orci
              tempus tristique id aliquam adipiscing aliquet. Ipsum magna sed
              cursus pulvinar viverra quis. Sit proin a elementum ac id egestas
              est. Mollis eget facilisi et urna urna molestie. Consectetur
              feugiat tristique senectus arcu id tincidunt.
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
