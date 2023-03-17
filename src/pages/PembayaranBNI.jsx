import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/PembayaranBCA.css";

//components
import CardPembayaranBerhasil from "../components/Card/CardPembayaranBerhasil";
import Countdown from "../components/general/CountDown";

//assets
import Background from "../assets/backgroundPayment.svg";
import BNI from "../assets/BNI.svg";
import NavbarPay from "../components/general/NavbarPay";

const PembayaranBNI = (props) => {
  const [Open, setOpen] = useState(false);
  const [bni, setBNI] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleKonfirmasi = () => {
    setOpen(!Open);
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .post(
          "https://reyhafiz.aenzt.tech/api/programs/3/buy",
          {
            payment_type: "bni",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // console.log(response);
          setBNI(response.data.data.Virtual_Account_Number);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data);
        });
      console.log(response);
    }
    fetchData();
  }, []);

  return (
    <div className="pagePaySpesifik">
      <NavbarPay />
      <div className="isi-pagePaySpesifik">
        <div className="title-paySpesifik">
          <h3>Pembayaran</h3>
        </div>
        <div className="card-paySpesifik">
          <div className={`berhasil-${Open}`}>
            <CardPembayaranBerhasil />
          </div>
          <div className="atas-cardSpesifik">
            <h3 className="title-cardSpesifik">Bayar Sebelum</h3>
            <h3 className="jam-cardSpesifik"><Countdown/></h3>
          </div>
          <hr className="line-paySpesifik" />
          {bni.map((item) => (
            <div className="bottom-cardSpesfik">
              <div className="left-cardSpesifik">
                <h3 className="title-bBox">Virtual Account</h3>
                <h3 className="desc-bBox">{item.va_number}</h3>
                <h3 className="title-bBox">Total Pembayaran</h3>
                <h3 className="desc-bBox">Rp 500.000</h3>
              </div>
              <div className="right-cardSpesifik">
                <img className="logo-bank" src={BNI}></img>
              </div>
            </div>
          ))}

          <button className="btn-konfirmasiPay" onClick={handleKonfirmasi}>
            Konfirmasi Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default PembayaranBNI;
