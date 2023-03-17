import React, {useState, useRef, useEffect} from 'react';
import "../../css/DropDownPopUp.css";

import {Link} from 'react-router-dom';
import Down from "../../assets/Down.svg";
const DropDownPopUp2 = props => {
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
          <h3 className='tulisannya'>Tanggal</h3>
          <img src={Down} className="img-ddb2"></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <DropdownItem img="" text={"22 Maret 2023"} onClick="/dashboard"/>
            <DropdownItem img="" text={"23 Maret 2023"} onClick="/profile"/>
            <DropdownItem img="" text={"24 Maret 2023"}/>
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
export default DropDownPopUp2;