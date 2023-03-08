import React from 'react';
import './CardSWUM.css';

const CardSWUM = ({src, judul, desc}) => {
    return (
        <>
        <div className='card-swum'>
            <img className='img-cardSWUM' src={src}></img>
            <h2 className='judul-cardSWUM'>{judul}</h2>
            <h4 className='desc-cardSWUM'>{desc}</h4>
        </div>
        </>
    );
};

export default CardSWUM;