import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

//components
import FormRegister from "../components/auth/FormRegister";
import Buttons from "../components/general/Buttons";

//assets
import Signup from "../assets/Signup.svg";
import Back from "../assets/Back.svg";

const Register = () => {
  return (
    <div className="whole-sec2">
      <div className="left-sec2">
        <div className="main-leftSec">
          <Link to="/">
            <div className="button-login">
              <img src={Back} className="logo-btnHome"></img>
              <div className="btn-home">Kembali</div>
            </div>
          </Link>
          <div className="box-imgRegister">
            <img className="img-register" src={Signup}></img>
          </div>
        </div>
      </div>
      <div className="right-sec2">
        <div className="form-part2">
          <h2 className="title-form2">Buat Akun</h2>
          <h3 className="desc-form2">Bergabung untuk mendapatkan bimbingan bersama mentor-mentor yang handal.</h3>
          <FormRegister />
          <h3 className="register2">
            Dengan mendaftar, anda setuju dengan <a>Syarat dan Ketentuan</a> serta 
            <a> Kebijakan Privasi</a> yang berlaku.
          </h3>
          <h3 className="penutup2">
            Sudah punya akun? <a href="/login">Masuk</a> di sini.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
