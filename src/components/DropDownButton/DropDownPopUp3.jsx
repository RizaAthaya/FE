import React, { useState, useRef, useEffect } from "react";
import "../../css/DropDownPopUp.css";
import { Link } from "react-router-dom";
import Down from "../../assets/Down.svg";
const DropDownPopUp3 = (props) => {
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
    <div>
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
                <DropdownItem img="" text={"Motivation Letter"} />
                <DropdownItem img="" text={"Essay"} />
              </div>
            </ul>
          </div>
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

export default DropDownPopUp3;
