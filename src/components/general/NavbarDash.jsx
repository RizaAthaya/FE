import React from "react";
import "../../css/NavbarDash.css";

//assets
import logo from "../../assets/LogoSWU.svg";
import Left from "../../assets/Left.svg";
import { Link } from "react-router-dom";

const NavbarDash = (props) => {
  return (
    <div className="nav-dashNew">
      <Link to="/dashboard">
        <button className="btn-pay">
          <img src={Left} className="img-pay"></img>
          <h3 className="text-pay">Kembali</h3>
        </button>
      </Link>
      <h3 className="title-dashN">Australian National University</h3>
      <Link to="/home">
        <img className="logo-dashN" src={logo}></img>
      </Link>
    </div>
  );
};

export default NavbarDash;
