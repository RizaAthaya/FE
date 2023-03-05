import React from 'react';

import CardSA from './CardSA';
import './CardSAList.css';

const CardSAList = ({beasiswaData}) => {
    return (
        <div className='cardSA-list'>
            {beasiswaData.map((items, id) =>{
                return (
                    <CardSA key={id}
                    linkImg=""
                    tag1={items.tag_level_id}
                    tag2={items.tag_cost_id}
                    title={items.name}
                    harga={items.price}/>
                )
            })}
        </div>
    );
};

export default CardSAList;