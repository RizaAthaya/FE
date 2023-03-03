import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

//components
import FormInput from "../components/auth/FormInput";
import Buttons from "../components/general/Buttons";
import Computer from "../assets/Computer.svg";
import Back from "../assets/Back.svg";

const Login = () => {
  return (
    <>
      <div className="whole-sec">
        <div className="left-sec">
          <div className="main-leftSec">
            <Link to='/'>
              <div className="button-login">
                <img src={Back} className="logo-btnHome"></img>
                <div className="btn-home">Kembali</div>
              </div>
            </Link>

            <img className="login-img" src={Computer} alt="login-img"></img>
          </div>
        </div>
        <div className="right-sec">
          <div className="form-part">
            <h2 className="title-form">Selamat datang</h2>
            <h3 className="desc-form">Masuk dengan akun.</h3>
            <FormInput />
            <h3 className="register">Lupa kata sandi?</h3>
            <h3 className="penutup">
              Belum punya akun? <a href="/register">Buat akun</a> disini
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
