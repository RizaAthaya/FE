import React from "react";
import "./Pembayaran.css";

//components
import NavbarPay from "../components/general/NavbarPay";

const Pembayaran = (props) => {
  return (
    <div className="payment-page">
      <NavbarPay />
      <h2 className="title-payment">Pilih Metode Pembayaran</h2>
      <div className="right-boxPay">
        <h2 className="title-rightBox">Jumlah Harga</h2>
        <div className="atas-Rbox">
          <h3 className="left-R">Mentoring beasiswa IISMA</h3>
          <h3 className="right-R">Rp 500.000</h3>
        </div>
        <hr className="line-payment"/>
        <div className="bawah-Rbox">
          <h3 className="left-RB">Total Pembayaran</h3>
          <h3 className="right-RB">Rp 500.000</h3>
        </div>
        
        <h3></h3>
      </div>
    </div>
  );
};

export default Pembayaran;
