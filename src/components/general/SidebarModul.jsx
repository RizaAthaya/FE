import React from "react";
import "../../css/SidebarModul.css";

//components
import DDCourse from "../DropDownButton/DDCourse";


const SidebarModul = (props) => {
  return (
    <div className="sidebar-modul">
      <h3 className="title-sideBar">Daftar Modul</h3>
      <hr/>
      <div className="list-modul">
        <DDCourse/>
        <DDCourse/>
      </div>

    </div>
  );
};

export default SidebarModul;
