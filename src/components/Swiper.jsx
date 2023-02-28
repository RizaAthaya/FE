// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import './Swiper.css'

export default (props) => {
  
  return (
    <Swiper className='swiperComponents'
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{props.objek}</SwiperSlide>
      <SwiperSlide>{props.objek}</SwiperSlide>
      <SwiperSlide>{props.objek}</SwiperSlide>
      <SwiperSlide>{props.objek}</SwiperSlide>
      <SwiperSlide>{props.objek}</SwiperSlide>
      <SwiperSlide>{props.objek}</SwiperSlide>
      <SwiperSlide>{props.objek}</SwiperSlide>
      <SwiperSlide>{props.objek}</SwiperSlide>
      ...
    </Swiper>
  );
};
