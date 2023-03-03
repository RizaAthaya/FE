import React from "react";
import Buttons from "./Buttons";
import './Navbar.css'
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const handleLogout = () => {
    axios.post('https://tweet-api.up.railway.app/api/v1/auth/logout', {
    }, {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
    })
        .then((response) => {
            console.log(response)

            window.localStorage.removeItem('token')

            setTimeout(() => {
                window.location.reload()
            }, 1000)
        })
        .catch((error) => {
            console.log(error)
        })
}
  return (
    <div className="navbar">
      <Buttons label="LOGO" styleBtn="btn-nav" ke='/'></Buttons>
      <ul className="nav-list">
        <li className="list-part">
          <Buttons label="Study Abroad" styleBtn="btn-navWhite" ke='/studyabroad'></Buttons>
        </li>
        <li className="list-part">
          <Buttons label="Pojok Beasiswa" styleBtn="btn-navWhite" ke='/pojokbeasiswa'></Buttons>
        </li>
        <li className="list-part">
          <Buttons label="Komunitas" styleBtn="btn-navWhite" ke='/komunitas'></Buttons>
        </li>
        <li className="list-part">
          <Buttons label="Artikel" styleBtn="btn-navWhite" ke='/artikel'></Buttons>
        </li>
      </ul>
      <ul className="nav-list2">
        <li className="list-part2">
          <Buttons label="Log In" styleBtn="btn-norm2" ke="/login" ></Buttons>
        </li>
        <li className="list-part2">
          <Buttons label="Register" styleBtn="btn-norm3"  ke="/register"></Buttons>
        </li>
        <li className="list-part2">
        <button className="btn-LogOut" onClick={handleLogout}>Log Out</button>
      </li>
      </ul>
    </div>
  );
};

export default Navbar;
