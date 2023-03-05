import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../components/Carousel/BuatCarousel2.css'

//utils
import CardforPM from "../utils/Datas4";

//components
import "../../components/Card/CardPM.css";


export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div id="buatCarosel">
        <h2>Center Mode</h2>
        <Slider {...settings} id="buatCarosel">
          {CardforPM.map((items) => (
            <div className="card-pm">
              <div className="icons-pm">
                <img
                  src={items.linkImg1}
                  alt="icon-pm"
                  className="icon-pm"
                ></img>
              </div>
              <div className="text-pm">
                <br /> <br /> <br />
                <h3 className="text1-pm">{items.textPM}</h3>
              </div>
              <hr className="line-profile" />
              <div className="profile-pm">
                <img
                  className="pict-pm"
                  src={items.LinkImg2}
                  alt="Profile-pict"
                ></img>
                <div className="text-profile">
                  <h2 className="title-profile"> {items.title} </h2>
                  <div className="desc-profile">
                    <h4 className="tag1-profile"> {items.tag1} </h4>
                    <h4 className="tag2-profile"> {items.tag2} </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
