import React from 'react';
// import CardPB from './CardPB';
import "../../css/CardArtikel.css";
import '../../css/CardArtikelList.css';

import CardArtikel from './CardArtikel';

const CardArtikelList = ({CardArtikels}) => {
    return (
        <div className='cardPB-list'>
        {/** {tag_level, tag_cost, scholarship_provider, name, close_registration, open_registration}*/}
        {CardArtikels.map((item, index) => {
            return (
                <CardArtikel
                    key={index}
                    foto={item.image}
                    tag_artikel = {item.tag_article.name}
                    title = {item.title}
                    created={item.created_at}
                    description={item.brief_description}
                />
            );
        })}
        </div>
    );
};

export default CardArtikelList;