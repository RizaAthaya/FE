import React from "react";
import "../css/DetailSA.css";
import Navbar from "../components/general/Navbar";

//assets
import Konten1 from "../assets/Konten1.svg";
// import Konten2 from "../assets/Konten2.svg";
import Konten3 from "../assets/Konten3.svg";
import Konten4 from "../assets/Konten4.svg";
import Konten5 from "../assets/Konten5.svg";
import { Link } from "react-router-dom";

const DetailSA = (props) => {
  return (
    <div className="detailpage-SA">
      <Navbar />
      <div className="whole-detailSA">
        <div className="bread-crumbSA">
          <h3>
            <a>Home </a> - <a>Study Abroad</a> - Detail
          </h3>
        </div>
        <div className="header-detailSA">
          <div className="bagian-kiri">
            <div className="tags-detailSA">
              <h3 className="tag-detailSA">Non Degree</h3>
              <h3 className="tag-detailSA">Multiple Countries</h3>
            </div>
            <div className="name-detailSA">
              IISMA : Indonesian International Student Mobility Awards
            </div>
            <div className="akhir-headerSA">
              <button className="btn-daftarMentoring">Daftar Mentoring</button>
              <h3 className="harga-mentoring">Rp 500.000</h3>
              <h3 className="jumlah-anggota">15/20</h3>
            </div>
          </div>
          <img className="img-detailSA"></img>
        </div>
        <hr />
        <div className="main-detailSA">
          <div className="box-kiriSA">
            <div className="box-descProgram">
              <h3 className="title-descProgram">Deskripsi Program</h3>
              <h3 className="desc-descProgram">
                Lorem ipsum dolor sit amet consectetur. Et nulla adipiscing quis
                in augue ipsum nunc. Nam eget viverra amet mauris netus sed
                nisi. Sit nunc enim mi in viverra dis hac ut accumsan. Lectus
                feugiat sit ullamcorper quis tristique massa urna accumsan.
                Nulla facilisis quis nibh morbi. At curabitur tortor adipiscing
                faucibus tellus mi. Lacus morbi a consectetur integer odio proin
                hac facilisis.
              </h3>
            </div>
            <div className="box-kontenProgram">
              <h3 className="title-kontenProgram"> Konten Program</h3>
              <div className="atas-kontenProgram">
                <div className="bagian-konten">
                  <img src={Konten1} className="img-bagianKonten"></img>
                  <h3 className="text-konten">Modul Pembelajaran</h3>
                </div>
                <div className="bagian-konten">
                  <img src="" className="img-bagianKonten"></img>
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
              <h3 className="title-tentangMentor">Tentang Mentor</h3>
              <div className="isi-tentangMentor">
                <img className="img-tentangMentor"></img>
                <div className="text-tentangMentor">
                  <h3 className="mentor-name">Jenny Wilson</h3>
                  <h3 className="mentor-lulusan">
                    Master of Computer Science, Stanford University
                  </h3>
                  <h3 className="mentor-tag">Awardee Beasiswa IISMA</h3>
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
