import "./Carousel3D.css";
import { useState } from "react";
import Slider from "react-slick";
import CardforPM from "../utils/Datas4";
import '../Card/CardPM.css'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Right from '../../assets/Right.svg';
import Left from '../../assets/Left.png';

function Carousel3D() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel3D">
      <Slider {...settings}>
        {CardforPM.map((item) => (
          <div className={(item.id-1) === imageIndex ? "slide activeSlide" : "slide"}>
            <div className="card-pm">
              <div className="icons-pm">
                <img src={item.linkImg1} alt="icon-pm" className="icon-pm"></img>
              </div>
              <div className="text-pm">
                <br /> <br /> <br />
                <h3 className="text1-pm">
                  {item.textPM}
                </h3>
              </div>

              <hr className="line-profile" />
              <div className="profile-pm">
                <img
                  className="pict-pm"
                  src={item.LinkImg2}
                  alt="Profile-pict"
                ></img>
                <div className="text-profile">
                  <h2 className="title-profile"> {item.title} </h2>
                  <div className="desc-profile">
                    <h4 className="tag1-profile"> {item.tag1} </h4>
                    <h4 className="tag2-profile"> {item.tag2} </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel3D;
