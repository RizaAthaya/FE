import React, { useEffect, useState } from "react";
import "../css/Pembayaran.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

//components
import NavbarPay from "../components/general/NavbarPay";
import DropDownPembayaran from "../components/DropDownButton/DDPembayaran";
import DropDownPembayaran2 from "../components/DropDownButton/DDPembayaran2";
import { rupiahFormatter } from "../components/general/rupiahformatter";

const Pembayaran = (props) => {
  const [pembayaran, setPembayaran] = useState([]);
  const { id } = useParams();
  const token = localStorage.getItem("token");
  
  const getPerId = async () => {
    try {
      const response = await axios.get(
        `https://reyhafiz.aenzt.tech/api/programs/${id}`
      );
      setPembayaran(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

 useEffect(() => {
    getPerId();
  }, []);
  return (
    <div className="payment-page">
      <NavbarPay />
      <div className="isi-choosePayment">
        <h2 className="title-payment">Pilih Metode Pembayaran</h2>
        <div className="full-boxPay">
          <div className="left-boxPay">
            <DropDownPembayaran id={id}/>
            <DropDownPembayaran2 id={id}/>
          </div>
          <div className="right-boxPay">
            <h2 className="title-rightBox">Jumlah Harga</h2>
            <div className="atas-Rbox">
              <h3 className="left-R">{pembayaran.name}</h3>
              <h3 className="right-R">{rupiahFormatter(pembayaran.price)}</h3>
            </div>
            <hr className="line-payment" />
            <div className="bawah-Rbox">
              <h3 className="left-RB">Total Pembayaran</h3>
              <h3 className="right-RB">{rupiahFormatter(pembayaran.price)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
