import React, { useState, useRef, useEffect } from "react";
import "../../css/DDCourse.css";

import { Link } from "react-router-dom";

//assets
import Down from "../../assets/Down.svg";
import Bullet from "../../assets/Bullte.svg";
const DDCourse = (props) => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="ddCourse">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={Down} className="img-ddb2"></img>
          <h3 className="tulisannya">Course</h3>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <DropdownItem text={"Dashboard"} onClick="/dashboard" />
            <DropdownItem text={"My Profile"} onClick="/profile" />
            <DropdownItem text={"Logout"} />
          </ul>
        </div>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <Link to={props.onClick}>
        <button onClick={props.klik} className="btn-ilang">
          <a> {props.text} </a>
        </button>
      </Link>
    </li>
  );
}
export default DDCourse;
