import React from "react";
import './Home.css';

//compnents
import Navbar from "../components/Navbar";

//section
import HomeSec1 from "../components/HomeSec1";
import HomeSec2 from "../components/HomeSec2";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="wholey-sec">
        <HomeSec1 /> 
        <HomeSec2/>
      </div>
    </div>
  );
};

export default Home;
