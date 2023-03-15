import React, { useState, useEffect } from "react";
import "../css/PembayaranBCA.css";
import axios from "axios";

//assets
import Background from "../assets/backgroundPayment.svg";
import BCA from "../assets/BCA.svg";
import NavbarPay from "../components/general/NavbarPay";

const PembayaranBCA = (props) => {
  const [bca, setBCA] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .post(
          "https://reyhafiz.aenzt.tech/api/programs/1/buy",
          {
            payment_type: "bca",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // console.log(response);
          setBCA(response.data.data);
          console.log(response.data)

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
              <img className="logo-bank" src={BCA}></img>
            </div>
          </div>
          <button className="btn-konfirmasiPay">Konfirmasi Pembayaran</button>
        </div>
      </div>
    </div>
  );
};

export default PembayaranBCA;
