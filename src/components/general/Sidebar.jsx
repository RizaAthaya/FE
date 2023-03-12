import React from "react";
import "../../css/Sidebar.css";
import { useState , useMemo} from "react";
import { Link } from "react-router-dom";

//assets
import logoSWU from "../../assets/LogoSWU.svg";
import Kelas from "../../assets/Kelas.svg";
import Chat from "../../assets/Chat2.svg";

const Sidebar = (props) => {
  // const [clicked, setClicked] = useState(false);
  // const [clicked2, setClicked2] = useState(true);
  const clicked = useMemo(() =>  window.location.pathname === "/dashboard/konsultasi", [window.location])
  const clicked2 = useMemo(() =>  window.location.pathname === "/dashboard/kelas", [window.location])
  // const ClickHandler = () => {
  //   setClicked(true);
  //   setClicked2(false);
  // };
  // const ClickHandler2 = () => {
  //   setClicked(false);
  //   setClicked2(true);
  // };

  return (
    <div className="sidebarDash">
      <div className="logo-secDash">
        <img className="logo-dash" src={logoSWU}></img>
      </div>
      <div className="box-menu">
        <h3 className="nama-side1">DASHBOARD</h3>
        <Link to="/dashboard/kelas">
          <button
            className={clicked2 ? "after-click" : "before-click"}
            // onClick={ClickHandler2}
          >
            <h3 className="menu1">
              <img className="img1-menu1" src={Kelas}></img>
              Kelas Saya
            </h3>
          </button>
        </Link>
        <Link to="/dashboard/konsultasi">
          <button
            className={clicked ? "after-click" : "before-click"}
            // onClick={ClickHandler}
          >
            <h3 className="menu2">
              <img src={Chat} className="img2-menu1"></img>
              Konsultasi
            </h3>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
