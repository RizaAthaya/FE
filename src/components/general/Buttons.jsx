import React from 'react';
import './Buttons.css';
import {Link} from 'react-router-dom';

const style = ['btn-norm', 'btn-submit', 'btn-nav', 'btn-norm2', 'btn-norm3', 'btn-norm4', 'btn-navWhite', 'btn-sa1', 'btn-sa2'];

const Buttons = ({
    styleBtn,
    ke,
    label,
    
}) => {
    const cekStyleBtn = style.includes(styleBtn)
    ? styleBtn : style[0];

    return (
        <div>
            <Link to={ke} className='btns'>
                <button 
                className={`${cekStyleBtn}`}
                > {label} 
                </button>
            </Link>
            
        </div>
    );
};

export default Buttons;