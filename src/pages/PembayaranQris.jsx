import React, { useState, useEffect } from "react";
import "../css/PembayaranQris.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


//components
import CardPembayaranBerhasil from "../components/Card/CardPembayaranBerhasil";

//assets
import Background from "../assets/backgroundPayment.svg";
import BCA from "../assets/BCA.svg";
import NavbarPay from "../components/general/NavbarPay";

const PembayaranSpesifikQris = (props) => {
  const [Open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [Qris, setQris] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
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
            payment_type: "qris",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // console.log(response);
          setQris(response.data.data.qris);
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
    <div className="pagePaySpesifikQris">
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
          <div className="bottom-cardSpesfik">
            <img src={Qris} className="gambar-qris"></img>
          </div>
          <button className="btn-konfirmasiPay" onClick={handleKonfirmasi}>
            Konfirmasi Pembayaran 
          </button>
        </div>
      </div>
    </div>
  );
};

export default PembayaranSpesifikQris;
