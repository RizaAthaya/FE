import React from "react";
import "../../css/NavbarDashboard.css";
import DropDown from "../DropDownButton/DDBDash";

//assets
import logo from "../../assets/logoDashboard.svg";

const NavbarDashboard = (props) => {
  return (
    <div className="nav-dashboard">
      <div className="logo-navDash">
        <img className="img-logoNav" src={logo}></img>
      </div>
      <div className="right-navDash">
        <DropDown />
      </div>
    </div>
  );
};

export default NavbarDashboard;
