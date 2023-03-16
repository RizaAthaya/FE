import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/PembayaranBCA.css";
import axios from "axios";

//components
import CardPembayaranBerhasil from "../components/Card/CardPembayaranBerhasil";

//assets
import Background from "../assets/backgroundPayment.svg";
import Permata from "../assets/Permata.svg";
import NavbarPay from "../components/general/NavbarPay";

const PembayaranPermata = (props) => {
  const [Open, setOpen] = useState(false);
  const [permata, setPermata] = useState([]);
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
          "https://reyhafiz.aenzt.tech/api/programs/1/buy",
          {
            payment_type: "permata",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // console.log(response);
          setPermata(response.data.data.Virtual_Account_Number);
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
            <h3 className="jam-cardSpesifik">24 : 00 : 00</h3>
          </div>
          <hr className="line-paySpesifik" />
          {permata.map((item) => (
            <div className="bottom-cardSpesfik">
              <div className="left-cardSpesifik">
                <h3 className="title-bBox">Virtual Account</h3>
                <h3 className="desc-bBox">{item.va_number}</h3>
                <h3 className="title-bBox">Total Pembayaran</h3>
                <h3 className="desc-bBox">Rp 500.000</h3>
              </div>
              <div className="right-cardSpesifik">
                <img className="logo-bank" src={Permata}></img>
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

export default PembayaranPermata;
