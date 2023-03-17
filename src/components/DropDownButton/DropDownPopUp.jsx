import React, { useState, useRef, useEffect } from "react";
import "../../css/DropDownPopUp.css";
import axios from "axios";

import { Link } from "react-router-dom";
import Down from "../../assets/Down.svg";
const DropDownPopUp = (props) => {
  const [program, setProgram] = useState("");
  const [error,setError] = useState("");
  useEffect(() => {
    const localStore = localStorage.getItem("token");
    const token = localStore;
    const handleUser = () => {
      axios
        .get("https://reyhafiz.aenzt.tech/api/users/programs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          setProgram(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data);
        });
    };
    handleUser();
  }, []);
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
    <div className="ddPopUp">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h3 className="tulisannya">Program</h3>
          <img src={Down} className="img-ddb2"></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            {/** Tempat mapping disini za */}
            <div className="semua-map">
              <DropdownItem img="" text={"Dashboard"} onClick="/dashboard" />
              <DropdownItem img="" text={"My Profile"} onClick="/profile" />
              <DropdownItem img="" text={"Logout"} />
            </div>
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
          <img src={props.img}></img>
          <a> {props.text} </a>
        </button>
      </Link>
    </li>
  );
}
export default DropDownPopUp;
