import React from "react";
import "./Home.css";

//compnents
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";

//section
import HomeSec1 from "../components/Home/HomeSec1"
import HomeSec2 from "../components/Home/HomeSec2";
import HomeSec3 from "../components/Home/HomeSec3";
import HomeSec4 from "../components/Home/HomeSec4";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="whole-sec3">
        <HomeSec1 />
        <HomeSec2 />
        <HomeSec3/>
        <HomeSec4/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
