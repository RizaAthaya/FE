import Dashboard from "../../assets/Dashboard.svg";
import Keluar from "../../assets/Logout.svg";
import Myprofile from "../../assets/User.svg";
import pp from "../../assets/PhotoProfile.svg";
import Down from "../../assets/Down.svg";
import "../../css/DDBFilter2.css";
import axios from "axios";

import React, { useState, useEffect, useRef } from "react";

function DropDown2() {
  const [open, setOpen] = useState(false);
  const [tagLevel, setTagLevel] = useState([]);

  let menuRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagLevels"
      );
      setTagLevel(response.data.data);
      console.log(response.data)
    }
    fetchData();
  }, []);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

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
          {tagLevel.map((item) => (
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

export default DropDown2;
