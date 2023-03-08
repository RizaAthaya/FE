import React from "react";
import "./NavbarDashboard.css";
import DropDown from "../DropDownButton/DDBDash";

const NavbarDashboard = (props) => {
  return (
    <div className="nav-dashboard">
      <div className="right-navDash">
        <DropDown />
      </div>
    </div>
  );
};

export default NavbarDashboard;
