import React from "react";
import Buttons from "./Buttons";
import "../../css/Navbar.css";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import DropDown from "../../components/DropDownButton/DDBDash";
import logo from "../../assets/LogoSWU.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logo-nav"></img>
      </Link>

      <ul className="nav-list">
        <li className="list-part">
          <Buttons
            label="Study Abroad"
            styleBtn="btn-navWhite"
            ke="/studyabroadlogin"
          ></Buttons>
        </li>
        <li className="list-part">
          <Buttons
            label="Pojok Beasiswa"
            styleBtn="btn-navWhite"
            ke="/pojokbeasiswalogin"
          ></Buttons>
        </li>
        <li className="list-part">
          <Buttons
            label="Komunitas"
            styleBtn="btn-navWhite"
            ke="/komunitaslogin"
          ></Buttons>
        </li>
        <li className="list-part">
          <Buttons
            label="Artikel"
            styleBtn="btn-navWhite"
            ke="/artikellogin"
          ></Buttons>
        </li>
      </ul>
      <DropDown />
    </div>
  );
};

export default Navbar;
