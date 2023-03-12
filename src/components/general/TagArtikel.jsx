import React, {useState} from 'react';
import "../../css/TagArtikel.css";

const TagArtikel = props => {
    const [On, setOn] = useState(false);
    return (
        <div className={`tag-artikel ${On ? "active" : "inactive"}`} onClick={() => {
            setOn(!On);
          }}>
            <h3 className='text-tagArtikel'>{props.name}</h3>
        </div>
    );
};

export default TagArtikel;