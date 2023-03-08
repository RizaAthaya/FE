import React from "react";
import "./HomeSec3.css";

//assets
import WSWU from "../../assets/WSWU.svg";
import Layanan from "../../assets/Layanan.svg";
import Mentor from "../../assets/Mentor.svg";
import Harga from "../../assets/Harga.svg";

//components
import Buttons from "../general/Buttons";
import BoxSWU from "../box/BoxSWU";
import CarouselPB from "../Carousel/CarouselPB";
import ManggilCardSA from "../Pagination/ManggilCardSA";

const HomeSec3 = (props) => {
  return (
    <div className="home-sec3">
      <div className="whySWU">
        <h2 className="titleSWU">Mengapa harus ScholarWithUs? </h2>
        <div className="main-whySWU">
          <img className="img-SWU" src={WSWU}></img>
          <div className="Box-SWU">
            <BoxSWU
              src={Layanan}
              title="Layanan Lengkap"
              desc="Menyediakan bimbingan dari persiapan dokumen sampai pelatihan wawancara untuk memaksimalkan potensi Anda."
            />
            <BoxSWU
              src={Mentor}
              title="Mentor Berpengalaman"
              desc="Dibimbing oleh mentor berpengalaman yang membantu kamu mempersiapkan diri mengikuti beasiswa internasional."
            />
            <BoxSWU
              src={Harga}
              title="Harga Terjangkau"
              desc="Dapatkan akses ke layanan lengkap dan berkualitas serta bimbingan dari mentor berpengalaman dengan biaya yang terjangkau."
            />
          </div>
        </div>
      </div>
      <div className="infoBeasiswa">
        <h2 className="title-IB"> Informasi Beasiswa</h2>
        
        <Buttons label="Liat Beasiswa Lainnya" styleBtn="btn-ib" />
      </div>
    </div>
  );
};

export default HomeSec3;
