import React from "react";
import "../../css/NavbarPay.css";

//assets
import Logo from "../../assets/LogoSWU.svg";
import Left from "../../assets/Left.svg";
import { Link } from "react-router-dom";

const NavbarPay = () => {
  return (
    <div className="nav-pay">
      <Link to="/studyabroadLogin">
        <button className="btn-pay">
          <img src={Left} className="img-pay"></img>
          <h3 className="text-pay">Kembali</h3>
        </button>
      </Link>
      <Link to="/">
        <img src={Logo} className="logo-navPay"></img>
      </Link>
    </div>
  );
};

export default NavbarPay;
