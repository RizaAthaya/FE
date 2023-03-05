import React from 'react';
import "./HomeSec4.css";

//components
import CardPM from '../Card/CardPM';
import BuatCarousel2 from '../Carousel/BuatCarousel2';

const HomeSec4 = props => {
    return (
        <div className='home-sec4'>
            <h2 className='title-HS4'>Pengalaman Mentor</h2>
            <BuatCarousel2/>
        </div>
    );
};

export default HomeSec4;