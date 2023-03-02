import React from "react";
import "./Login.css";

//components
import FormInput from "../components/auth/FormInput";
import Buttons from "../components/general/Buttons";

import Computer from "../assets/Computer.svg";
const Login = () => {
  return (
    <>
      <div className="whole-sec">
        <div className="left-sec">
          <div className="main-leftSec">
            <div className="button-login">
              <Buttons label="Home" styleBtn="btn-norm4" ke="/" ></Buttons>
            </div>
            <img className="login-img" src={Computer} alt="login-img"></img>
          </div>
        </div>
        <div className="right-sec">
          <div className="form-part">
            <h2 className="title-form">Selamat datang</h2>
            <h3 className="desc-form">
              Masuk dengan akun.
            </h3>
            <FormInput />
            <h3 className="register">Lupa kata sandi?</h3>
            <h3 className="penutup">Belum punya akun? <a href="/register">Buat akun</a> disini</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
