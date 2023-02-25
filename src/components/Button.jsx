import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div className='Button'>
            <button className='btn'>{props.label}</button>
        </div>
    );
};

export default Button;