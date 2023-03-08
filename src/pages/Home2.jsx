import React from "react";
import "./Home.css";

//compnents
import Navbar from "../components/general/Navbar2";
// import Navbarmenu from "../components/general/NoteNavbar";
// import DropDown from "../components/DropDownButton/DropDown";
import Footer from "../components/general/Footer";

//section
import HomeSec1 from "../components/Home/HomeSec1"
import HomeSec2 from "../components/Home/HomeSec2";

const Home = () => {
  return (
    <div>
     
      <Navbar/>
      <div className="whole-sec3">
        <HomeSec1 />
        <HomeSec2 />
       
        <Footer />
      </div>
    </div>
  );
};

export default Home;
