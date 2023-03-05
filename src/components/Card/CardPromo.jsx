import React from 'react';

const CardPromo = ({linkVid}) => {
    return (
        <div className='card-promo'>
            <div className='video'>
            <video src={linkVid}/>
            </div>
        </div>
    );
};

export default CardPromo;