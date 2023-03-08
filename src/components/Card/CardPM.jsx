import React from 'react';
import "./CardPM.css";

const CardPM = ({img, nama, tag, uni}) => {
    return (
        <div className='card-PM'>
            <img className='img-PM' src={img}></img>
            <h3 className='nama-PM'>{nama}</h3>
            <h3 className='tag-PM'>{tag}</h3>
            <h3 className='uni-PM'>{uni}</h3>
        </div>
    );
};

export default CardPM;