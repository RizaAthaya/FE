import React from 'react';
import CardPB from './CardPB';
import "../../css/CardPB.css";
import '../../css/CardPBList.css';

const CardPBList = ({CardBeasiswa}) => {
    return (
        <div className='cardPB-list'>
        {/** {tag_level, tag_cost, scholarship_provider, name, close_registration, open_registration}*/}
        {CardBeasiswa.map((item, index) => {
            return (
                <CardPB
                    key={index}
                    tag_level={item.tag_level.name}
                    tag_cost={item.tag_cost.name}
                    scholarship_provider={item.scholarship_provider}
                    name={item.name}
                    close_registration={item.close_registration}
                    open_registration={item.open_registration}                    
                />
            );
        })}
        </div>
    );
};

export default CardPBList;