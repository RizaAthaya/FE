import React from "react";
import "../css/Pembayaran.css";

//components
import NavbarPay from "../components/general/NavbarPay";
import DropDownPembayaran from "../components/DropDownButton/DDPembayaran";
import DropDownPembayaran2 from "../components/DropDownButton/DDPembayaran2";

const Pembayaran = (props) => {
  return (
    <div className="payment-page">
      <NavbarPay />
      <div className="isi-choosePayment">
        <h2 className="title-payment">Pilih Metode Pembayaran</h2>
        <div className="full-boxPay">
          <div className="left-boxPay">
            <DropDownPembayaran />
            <DropDownPembayaran2 />
          </div>
          <div className="right-boxPay">
            <h2 className="title-rightBox">Jumlah Harga</h2>
            <div className="atas-Rbox">
              <h3 className="left-R">Mentoring beasiswa IISMA</h3>
              <h3 className="right-R">Rp 500.000</h3>
            </div>
            <hr className="line-payment" />
            <div className="bawah-Rbox">
              <h3 className="left-RB">Total Pembayaran</h3>
              <h3 className="right-RB">Rp 500.000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
