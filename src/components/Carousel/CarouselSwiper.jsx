import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import axios from "axios";

// Import Swiper styles
import "swiper/css";

export default () => {
  const [newMentor, setNewMentor] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://reyhafiz.aenzt.tech/api/mentors/new"
      );
      setNewMentor(response.data.data);
      console.log("yang ini");
      console.log(response.data.data);
    }
    console.log("yang ini lho");
    fetchData();
  }, []);
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {Object.values(newMentor).map((item) => (
        <SwiperSlide>
          <div>
            <div className="card-PM">
              <img className="img-PM" src=""></img>
              <h3 className="nama-PM">{item.name}</h3>
              <h3 className="tag-PM">{item.scholar_history}</h3>
              <h3 className="uni-PM">{item.study_track}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
