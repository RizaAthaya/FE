import Dashboard from "../../assets/Dashboard.svg";
import Keluar from "../../assets/Logout.svg";
import Myprofile from "../../assets/User.svg";
import pp from "../../assets/PhotoProfile.svg";
import Down from "../../assets/Down.svg";
import "../../css/DropDown.css";
import axios from "axios";
import {Link} from 'react-router-dom';


import React, { useState, useEffect, useRef } from "react";

function DropDown() {
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

  const localStore = localStorage.getItem("token");
  const token = (localStore);
  const handleLogout = () => {
    axios
      .post("http://103.189.235.157:10015/api/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);

        window.localStorage.removeItem("token");

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="ddb">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={pp} className="img-ddb1"></img>
          <img src={Down} className="img-ddb2"></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <DropdownItem img={Dashboard} text={"Dashboard"} onClick="/dashboard"/>
            <DropdownItem img={Myprofile} text={"My Profile"} onClick="/profile"/>
            <DropdownItem img={Keluar} text={"Logout"} klik={handleLogout} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
    <Link to={props.onClick}>
      <button onClick={props.klik} className="btn-ilang">
        <img src={props.img}></img>
        <a> {props.text} </a>
      </button>
      </Link>
    </li>
    
  );
}

export default DropDown;
