import Dashboard from "../../assets/Dashboard.svg";
import Keluar from "../../assets/Logout.svg";
import Myprofile from "../../assets/User.svg";
import pp from "../../assets/PhotoProfile.svg";
import Down from "../../assets/Down.svg";
import "../../css/DDBDash.css";
import axios from "axios";

import React, { useState, useEffect, useRef } from "react";

// page
import DashboardNew from "../../pages/DashboardNew";
import Profile from "../../pages/Profile";
import { Link } from "react-router-dom";

function DropDown() {
  const [open, setOpen] = useState(false);
  const [Nama, setNama] = useState("");

  let menuRef = useRef();
  useEffect(() => {
    const localStore = localStorage.getItem("token");
    const token = localStore;
    async function fetchData() {
      const response = await axios
        .get("https://reyhafiz.aenzt.tech/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log(response);
          const data = response.data.data;
          setNama(data.name);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data);
        });
      console.log(response);
    }
    fetchData();
  }, []);
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

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    axios
      .post("https://reyhafiz.aenzt.tech/api/logout", null, {
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
    <div className="ddb-dash">
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
            <DropdownItem img={Myprofile} text={"My Profile"} ke={"/profile"} />
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
      <Link to={props.ke}>
        <button onClick={props.onClick} className="btn-ilang">
          <img src={props.img}></img>
          <a> {props.text} </a>
        </button>
      </Link>
    </li>
  );
}

export default DropDown;
