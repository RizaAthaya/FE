import React from "react";
import "../css/PembayaranBCA.css";

//assets
import Background from "../assets/backgroundPayment.svg";
import BNI from "../assets/BNI.svg";
import NavbarPay from "../components/general/NavbarPay";

const PembayaranBNI = (props) => {
  return (
    <div className="pagePaySpesifik">
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
            <div className="left-cardSpesifik">
              <h3 className="title-bBox">Virtual Account</h3>
              <h3 className="desc-bBox">1122334455667788</h3>
              <h3 className="title-bBox">Total Pembayaran</h3>
              <h3 className="desc-bBox">Rp 500.000</h3>
            </div>
            <div className="right-cardSpesifik">
              <img className="logo-bank" src={BNI}></img>
            </div>
          </div>
          <button className="btn-konfirmasiPay">Konfirmasi Pembayaran</button>
        </div>
      </div>
    </div>
  );
};

export default PembayaranBNI;
