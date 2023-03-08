import React from "react";
import "./NavbarPay.css";

//assets
import Logo from "../../assets/LogoSWU.svg";
import Left from "../../assets/Left.svg";

const NavbarPay = () => {
  return (
    <div className="nav-pay">
      <button className="btn-pay">
        <img src={Left} className="img-pay"></img>
        <h3 className="text-pay">Kembali</h3>
      </button>
      <img src={Logo} className="logo-navPay"></img>
    </div>
  );
};

export default NavbarPay;
