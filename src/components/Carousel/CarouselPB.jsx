import React, { useEffect, useState } from "react";
import "../../css/CarouselPB.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Carousel.css";
import "../../css/CardPB.css";
import axios from "axios";

//components
import CardPB from "../Card/CardPB";

const Carousel = (props) => {
  const [newPB, setNewPB] = useState([]);
  const [tagLevelAll, setTagLevelAll] = useState([]);
  const [tagCountriesAll, setTagCountriesAll] = useState([]);
  const [tagCostsAll, setTagCostsAll] = useState([]);

  // const [tagCost, setTagCost] = useState([]);
  // const [tagCountries, setTagCountries] = useState([]);
  // ini ambil 9 beasiswa terbaru
  let getTagL = "";
  let getTagC = "";
  let getTagCo = "";
  const getScholarships = async () => {
    try {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/scholarships/new"
      );
      setNewPB(response.data.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getTagLevel = async () => {
    try {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagLevels"
      );
      setTagLevelAll(response.data.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getTagCost = async () => {
    try {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagCosts"
      );
      setTagCostsAll(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getTagCountries = async () => {
    try {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/tagCountries"
      );
      setTagCountriesAll(response.data.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getScholarships();
    getTagLevel();
    getTagCost();
  }, []);
  // // ini ambil semua tagCost
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       "http://103.189.235.157:10015/api/tagCosts/4"
  //     );
  //     setTagCost(response.data);
  //     console.log(response.data);
  //   }

  //   fetchData();
  // }, []);
  // // ini ambil semua tagLeve

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       "http://103.189.235.157:10015/api/tagLevels/2"
  //     );
  //     setTagLevel(response.data);
  //     console.log(response.data);
  //   }
  //   fetchData();
  // }, []);
  // // ini ambil semua tagCountries
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       "http://103.189.235.157:10015/api/tagCountries/3"
  //     );
  //     setTagCountries(response.data);
  //     console.log(response.data);
  //   }
  //   fetchData();
  // }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1500,
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
  const handleClick = ({ id }) => {
    if (window.localStorage.getItem("token")) {
      navigate(`/detailbeasiswalogin/${id}`);
    } else {
      navigate(`/detailbeasiswa/${id}`);
    }
  };
  return (
    <div className="carousel-PB">
      <div className="carousel">
        <div className="ch1">
          <Slider {...settings}>
            {newPB.map((item, index) => {
              {
                tagLevelAll.map((tags) => {
                  if (tags.id == item.tag_level_id) {
                    getTagL = tags.name;
                  }
                });
              }
              {
                tagCostsAll.map((tags) => {
                  if (tags.id == item.tag_cost_id) {
                    getTagC = tags.name;
                  }
                });
              }
              {
                if (item.tag_countries.length > 1) {
                  getTagCo = "Multiple countries";
                } else {
                  item.tag_countries.map((item) => (getTagCo = item.name));
                }
              }

              return (
                <div className="card-car">
                  <div className="card-top">
                    <CardPB
                      key={index}
                      id={item.id}
                      tag_level={getTagL}
                      tag_cost={getTagC}
                      tag_countries={getTagCo}
                      scholarship_provider={item.scholarship_provider}
                      name={item.name}
                      close_registration={item.close_registration}
                      open_registration={item.open_registration}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const CarouselPB = (props) => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default CarouselPB;
