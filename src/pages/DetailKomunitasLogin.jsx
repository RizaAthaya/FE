import React, { useState } from "react";
import "../css/DetailKomunitas.css";

//components
import Navbar from "../components/general/Navbar2";
import PopUpReply from "../components/box/PopUpReply";

//assets
import exit from "../assets/VectorExit.svg";
import back from "../assets/Back.svg";
import chat from "../assets/Chat.svg";
import plus from "../assets/Plus.svg";
import { Link } from "react-router-dom";

const DetailKomunitasLogin = (props) => {
  const [Show, setShow] = useState(false);
  const handleCLick = () => {
    setShow(!Show);
  };
  return (
    <div className="detail-komunitas">
      <Navbar />
      <div className="full-detailKomunitas">
        <Link to="/komunitas">
          <button className="btn-kembaliDiskusi">
            <img src={back} className="kembali-logoDiskusi"></img>
            <h3 className="kembali-textDiskusi">Kembali</h3>
          </button>
        </Link>
        <div className="box-diskusiUtama">
          <div className={`reply-${Show}`}>
            <img className="btn-exitReply" src={exit} onClick={handleCLick}></img>
            <PopUpReply />
          </div>
          <div className="left-diskusiUtama">
            <img className="profpict-diskusiUtama"></img>
          </div>
          <div className="right-diskusiUtama">
            <div className="header-diskusiUtama">
              <div className="nama-penulisDiskusi">Riza Athaya - </div>
              <div className="waktu-pembentukanDiskusi">5 menit yang lalu</div>
            </div>
            <h3 className="judul-diskusiUtama">
              Apa yang perlu dipersiapkan ketika mengikuti beasiswa IISMA?
            </h3>
            <h3 className="desc-diskusiUtama">
              Lorem ipsum dolor sit amet consectetur. Dignissim nec elit enim a
              varius sapien. Lectus cum pretium viverra sagittis auctor
              consectetur. Enim ut purus urna viverra arcu. Velit vel in et
              pellentesque commodo lectus dolor amet.
            </h3>
            <div className="tags-diskusiUtama">
              <h3 className="tag-diskusiUtama">tips-trik</h3>
              <h3 className="tag-diskusiUtama">iisma</h3>
            </div>
            <div className="akhir-diskusiUtama">
              <div className="left-akhirDU">
                <img className="chat-logoDiskusi" src={chat}></img>
                <h3 className="chat-textDiskusi">5 pembahasan</h3>
              </div>
              <div className="right-akhirDU" onClick={handleCLick}>
                <img src={plus} className="plus-logoDiskusi"></img>
                <h3 className="plus-textDiskusi">Jawaban</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="reply-part">
          <div className="header-replypart">
            <h3 className="title-reply">Pembahasan</h3>
          </div>
          <div className="all-reply">
            <div className="each-reply">
              <img className="profile-eachReply"></img>
              <div className="textpartreply">
                <div className="header-diskusiUtama">
                  <div className="nama-penulisDiskusi">Riza Athaya - </div>
                  <div className="waktu-pembentukanDiskusi">
                    5 menit yang lalu
                  </div>
                </div>
                <h3 className="desc-reply">
                  Lorem ipsum dolor sit amet consectetur. Dignissim nec elit
                  enim a varius sapien. Lectus cum pretium viverra sagittis
                  auctor consectetur. Enim ut purus urna viverra arcu. Velit vel
                  in et pellentesque commodo lectus dolor amet.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKomunitasLogin;
