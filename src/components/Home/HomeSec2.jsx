import React from 'react';
import './HomeSec2.css';

//components

import BoxVid from '../Carousel/BoxVid';

const HomeSec2 = props => {
    return (
        <div className='sec2'>
            <h2 className='title-sec2'>Promo Menarik</h2>
            <BoxVid/>
        </div>
    );
};

export default HomeSec2;