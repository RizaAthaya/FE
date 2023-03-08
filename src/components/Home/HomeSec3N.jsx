import React from "react";
import "./HomeSec3N.css";

//cmponents
import CardSWUM from "../Card/CardSWUM";

//assets
import Team from "../../assets/Teams.svg";
import Konsultasi from "../../assets/Konsultasi.svg";
import Modul from "../../assets/modul.svg";
import Resume from "../../assets/Resume.svg";
import satu from "../../assets/01.svg";
import dua from "../../assets/02.svg";
import tiga from "../../assets/03.svg";

const HomeSec3N = (props) => {
  return (
    <div className="homeSec3N">
      <div className="BSWU">
        <h3 className="judul-bswu">Bagaimana ScholarWithUs Membantu Kamu?</h3>
        <div className="cards-swum">
          <CardSWUM
            src={Konsultasi}
            judul="konsultasi"
            desc="Dapatkan panduan persiapan beasiswa terbaik dari mentor berpengalaman melalui konsultasi 1-on-1 yang mudah dan fleksibel."
          />
          <CardSWUM
            src={Modul}
            judul="Modul & Video Pembelajaran"
            desc="Dapatkan panduan persiapan beasiswa terbaik dari mentor berpengalaman melalui konsultasi 1-on-1 yang mudah dan fleksibel."
          />
          <CardSWUM
            src={Resume}
            judul="Review Dokumen"
            desc="Kirimkan berbagai dokumen beasiswa kamu untuk direview oleh mentor ahli dan tingkatkan peluang meraih beasiswa impian."
          />
        </div>
      </div>
      <div className="MSWU">
        <h3 className="judul-mswu">Mengapa harus ScholarWithUs?</h3>
        <div className="main-mswu">
          <img className="img-hs3n" src={Team}></img>
          <div className="text-mswu">
            <div className="box-mswu">
              <img src={satu} className="img-mswu"></img>
              <div className="right-mswu">
                <h3 className="judul-boxmswu">Harga Terjangkau</h3>
                <h3 className="desc-boxmswu">
                  Dapatkan akses ke layanan lengkap dan berkualitas serta
                  bimbingan dari mentor berpengalaman dengan biaya yang
                  terjangkau.
                </h3>
                <hr className="line-mswu"/>
              </div>
              
            </div>
            <div className="box-mswu">
              <img src={dua} className="img-mswu"></img>
              <div className="right-mswu">
                <h3 className="judul-boxmswu">Mentor Berpengalaman</h3>
                <h3 className="desc-boxmswu">
                  Dibimbing oleh mentor berpengalaman yang membantu kamu
                  mempersiapkan diri mengikuti beasiswa.
                </h3>
                <hr className="line-mswu"/>
              </div>
              
            </div>
            <div className="box-mswu">
              <img src={tiga} className="img-mswu"></img>
              <div className="right-mswu">
                <h3 className="judul-boxmswu">Materi Terstruktur</h3>
                <h3 className="desc-boxmswu">
                  Kurikulum dan metode pembelajaran yang terstruktur dan lengkap
                  untuk kamu mempersiapkan diri mengikuti beasiswa.
                </h3>
                <hr className="line-mswu"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec3N;
