import React from "react";
import "./Home.css";

//compnents
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//section
import HomeSec1 from "../components/HomeSec1";
import HomeSec2 from "../components/HomeSec2";
import HomeSec3 from "../components/HomeSec3";
import HomeSec4 from "../components/HomeSec4";
import HomeSec5 from "../components/HomeSec5";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="wholey-sec">
        <HomeSec1 />
        <HomeSec2 />
        <HomeSec3 />
        <HomeSec4 />
        <HomeSec5 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
