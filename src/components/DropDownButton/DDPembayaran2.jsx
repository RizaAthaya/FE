import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../css/DDPembayaran2.css";

//assets
import qris from "../../assets/qris.svg";
import qr from "../../assets/qrsvg.svg";
import Down from "../../assets/Down.svg";

function DropDownPembayaran2() {
  const [open2, setOpen2] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen2(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="ddb-pembayaran2">
      <div className="menu-container" ref={menuRef}>
        <div
          className={`menu-trigger ${open2 ? "active" : "inactive"}`}
          onClick={() => {
            setOpen2(!open2);
          }}
        >
          <div className="left-trigger">
            <img src={qr} className="img-ddb1"></img>
            <h3 className="text-ddbp">Qris</h3>
          </div>

          <img src={Down} className="img-ddb2"></img>
        </div>

        <div className={`dropdown-menu ${open2 ? "active" : "inactive"}`}>
          <ul>
            <DropdownItem img={qris} onClick="/pembayaran/qris" />
            
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
        </button>
      </Link>
    </li>
  );
}

export default DropDownPembayaran2;
