import React from "react";
import Buttons from "./Buttons";
import "../../css/Navbar.css";
import { Navigate, Outlet } from "react-router-dom";
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
            label="Mentoring"
            styleBtn="btn-navWhite"
            ke="/studyabroad"
          ></Buttons>
        </li>
        <li className="list-part">
          <Buttons
            label="Pojok Beasiswa"
            styleBtn="btn-navWhite"
            ke="/pojokbeasiswa"
          ></Buttons>
        </li>
        <li className="list-part">
          <Buttons
            label="Komunitas"
            styleBtn="btn-navWhite"
            ke="/komunitas"
          ></Buttons>
        </li>
        <li className="list-part">
          <Buttons
            label="Artikel"
            styleBtn="btn-navWhite"
            ke="/artikel"
          ></Buttons>
        </li>
      </ul>
      <ul className="nav-list2">
        <li className="list-part2">
          <Buttons label="Log In" styleBtn="btn-norm2" ke="/login"></Buttons>
        </li>
        <li className="list-part2">
          <Buttons
            label="Register"
            styleBtn="btn-norm3"
            ke="/register"
          ></Buttons>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
