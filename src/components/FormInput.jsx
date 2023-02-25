import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    return (
        <>
            <h3 className='input-title'>{props.judul}</h3>
            <input type='text' className='input-box'></input>
        </>
    );
};

export default FormInput;