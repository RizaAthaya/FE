import Dashboard from "../../assets/Dashboard.svg";
import Keluar from "../../assets/Logout.svg";
import Myprofile from "../../assets/User.svg";
import pp from "../../assets/PhotoProfile.svg";
import Down from "../../assets/Down.svg";
import "../../css/DDBFilter.css";
import axios from "axios";

import React, { useState, useEffect, useRef } from "react";

function DropDown3() {
  const [open, setOpen] = useState(false);
  const [tagCost, setTagCost] = useState([]);

  let menuRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagCosts"
      );
      setTagCost(response.data.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const localStore = localStorage.getItem("token");
  const token = localStore;

  return (
    <div className="ddb-filter">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-triggerTag"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h1 className="nama-ddb11">Tipe Pendanaan</h1>
          <img src={Down} className="img-ddb21"></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
          {tagCost.map((item) => (
            <DropdownItem text={item.name} />
          ))}
            
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
        <a> {props.text} </a>
      </button>
    </li>
  );
}

export default DropDown3;
