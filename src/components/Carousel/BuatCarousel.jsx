import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../css/BuatCarousel.css";

//utils
import CardforPM from "../utils/Datas4";

//components
import "../../components/Card/CardPM.css";

const BuatCarousel = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div  className="buatCarousel">
      <Slider {...settings}>
        {CardforPM.map((items) => (
          <div className="card-pm">
            <div className="icons-pm">
              <img src={items.linkImg1} alt="icon-pm" className="icon-pm"></img>
            </div>
            <div className="text-pm">
              <br /> <br /> <br />
              <h3 className="text1-pm">
               {items.textPM}
              </h3>
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
};

BuatCarousel.propTypes = {};

export default BuatCarousel;
