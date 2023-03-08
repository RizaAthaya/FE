import React from "react";
import "./Profile.css";
import axios from "axios";
import { useState } from "react";

import Navbar from "../components/general/Navbar2";
import Footer from "../components/general/Footer";
const Profile = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usia, setUsia] = useState("");
  const [telp, setTelp] = useState("");
  const [gender, setGender] = useState("");

  const [error, setError] = useState({
    message: "",
    status: "",
  });

  return (
    <div className="profile">
      <Navbar />
      <div className="semua-profileIsi">
        <div className="whole-profile">
          <div className="atas-profile">
            <h2 className="title-profile">Profile Saya</h2>
            <div className="pict-partProfile">
              <img className="img-profile" src=""></img>
              <img className="edit-img" src=""></img>
            </div>
          </div>
          <div className="box-profile">
            <form onSubmit="">
              <h3 className="input-title">Email</h3>
              <input
                placeholder="Email"
                label="Email"
                type="text"
                className="input-box"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <h3 className="input-title">Password</h3>
              <input
                placeholder="Password"
                label="Password"
                className="input-box"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <h3 className="input-title">Nomor Telepon</h3>
              <input
                placeholder="Nomor Telepon"
                label="NoTelpon"
                type="text"
                className="input-box"
                onChange={(e) => {
                  setTelp(e.target.value);
                }}
              ></input>
              <h3 className="input-title">Usia</h3>
              <input
                placeholder="Usia"
                label="Usia"
                type="text"
                className="input-box"
                onChange={(e) => {
                  setUsia(e.target.value);
                }}
              ></input>
              <h3 className="input-title">Jenis Kelamin</h3>
              <input
                placeholder="Jenis Kelamin"
                label="JenisKelamin"
                type="text"
                className="input-box"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              ></input>
              <br />
              <button type="submit" className="btn-submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
