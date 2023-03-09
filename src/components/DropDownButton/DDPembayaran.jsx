import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./DDPembayaran.css";

//assets
import BCA from "../../assets/BCA.svg";
import BNI from "../../assets/BNI2svg.svg";
import BRI from "../../assets/BRI2.svg";
import Permata from "../../assets/Permata2.svg";
import Bank from "../../assets/Bank.svg";
import Down from "../../assets/Down.svg";

function DropDownPembayaran() {
  const [open, setOpen] = useState(true);

  //   let menuRef = useRef();

  //   useEffect(() => {
  //     let handler = (e) => {
  //       if (!menuRef.current.contains(e.target)) {
  //         setOpen(false);
  //         // console.log(menuRef.current);
  //       }
  //     };

  //     document.addEventListener("mousedown", handler);

  //     return () => {
  //       document.removeEventListener("mousedown", handler);
  //     };
  //   });
  return (
    <div className="ddb-pembayaran">
      <div className={`menu-container ${open ? "active" : "inactive"}`}>
        <div
          className={`menu-trigger ${open ? "active" : "inactive"}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="left-trigger">
            <img src={Bank} className="img-ddb1"></img>
            <h3 className="text-ddbp">Bank Transfer</h3>
          </div>

          <img src={Down} className="img-ddb2"></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <DropdownItem img={BCA} onClick="/pembayaran/bca" />
            <DropdownItem img={BRI} onClick="/pembayaran/bri" />
            <DropdownItem img={BNI} onClick="/pembayaran/bni" />
            <DropdownItem img={Permata} onClick="/pembayaran/permata" />
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

export default DropDownPembayaran;
