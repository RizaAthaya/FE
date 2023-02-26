import React from "react";
import Buttons from "./Buttons";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Buttons label="LOGO" styleBtn="btn-nav"></Buttons>
      <ul className="nav-list">
        <li className="list-part">
          <Buttons label="LOGO" styleBtn="btn-nav"></Buttons>
        </li>
        <li className="list-part">
          <Buttons label="LOGO" styleBtn="btn-nav"></Buttons>
        </li>
        <li className="list-part">
          <Buttons label="LOGO" styleBtn="btn-nav"></Buttons>
        </li>
        <li className="list-part">
          <Buttons label="LOGO" styleBtn="btn-nav"></Buttons>
        </li>
      </ul>
      <ul className="nav-list2">
        <li className="list-part2">
          <Buttons label="LOGO" styleBtn="btn-norm2"></Buttons>
        </li>
        <li className="list-part2">
          <Buttons label="LOGO" styleBtn="btn-norm3"></Buttons>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
