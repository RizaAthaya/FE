import Dashboard from "../../assets/Dashboard.svg";
import Keluar from "../../assets/Logout.svg";
import Myprofile from "../../assets/User.svg";
import pp from "../../assets/PhotoProfile.svg";
import Down from "../../assets/Down.svg";
import "./DDBFilter2.css";
import axios from "axios";

import React, { useState, useEffect, useRef } from "react";

function DropDown2() {
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
  const token = localStore;
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
    <div className="ddb-filter2">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >

          <h1 className="nama-ddb1">Jenjang</h1>
          <img src={Down} className="img-ddb2"></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <DropdownItem img={Dashboard} text={"Dashboard"} />
            <DropdownItem img={Myprofile} text={"My Profile"} />
            <DropdownItem img={Keluar} text={"Logout"} onClick={handleLogout} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItemDash">
      <button onClick={props.onClick} className="btn-ilang">
        <img src={props.img}></img>
        <a> {props.text} </a>
      </button>
    </li>
  );
}

export default DropDown2;
