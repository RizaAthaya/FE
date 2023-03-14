import React from 'react';
import "../../css/PopUpReply.css";

const PopUpReply = props => {
    return (
        <div className='popup-reply'>
            <h3 className='title-reply'>Tambahkan Jawaban</h3>
            <h3 className='title-boxReply'>Jawaban Pertanyaan</h3>
            <input className='boxinput-reply'></input>
            <h3 className='desc-boxinput'>Uraikan jawaban kamu lebih panjang dan jelas pada bagian ini</h3>
            <button className='btn-tambahkan'>Tambahkan Jawaban</button>
        </div>
    );
};

export default PopUpReply;