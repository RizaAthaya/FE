import React from "react";
import "../css/PembayaranQris.css";

//assets
import Background from "../assets/backgroundPayment.svg";
import BCA from "../assets/BCA.svg";
import NavbarPay from "../components/general/NavbarPay";

const PembayaranSpesifikQris = (props) => {
  return (
    <div className="pagePaySpesifikQris">
      <NavbarPay />
      <div className="isi-pagePaySpesifik">
        <div className="title-paySpesifik">
        <h3>Pembayaran</h3>
        </div>
        <div className="card-paySpesifik">
          <div className="atas-cardSpesifik">
            <h3 className="title-cardSpesifik">Bayar Sebelum</h3>
            <h3 className="jam-cardSpesifik">24 : 00 : 00</h3>
          </div>
          <hr className="line-paySpesifik" />
          <div className="bottom-cardSpesfik">
            
           
          </div>
          <button className="btn-konfirmasiPay">Konfirmasi Pembayaran</button>
        </div>
      </div>
    </div>
  );
};

export default PembayaranSpesifikQris;
