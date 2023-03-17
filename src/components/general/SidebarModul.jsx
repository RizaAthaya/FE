import React from "react";
import "../../css/SidebarModul.css";

//components
import DDCourse from "../DropDownButton/DDCourse";

//assets
import imgS from "../../assets/Sidebar.svg";

const SidebarModul = (props) => {
  return (
    <div className="sidebar-modul">
      <div className="atas-sModul">
        <img className="img-sidebar" src={imgS}></img>
        <h3 className="title-sideBar">Daftar Modul</h3>
      </div>
      <div className="list-modul">
        <DDCourse />
        <DDCourse />
        <DDCourse />
      </div>
    </div>
  );
};

export default SidebarModul;
