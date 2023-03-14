import React from 'react';
import berhasil from "../../assets/gagalPembayaran.svg"
import "../../css/CardPembayaranBerhasil.css";

const CardPembayaranBerhasil = props => {
    return (
        <div className='pembayaran-berhasil'>
            <img src={berhasil} className="gambar-berhasil"></img>
            <h3 className='title-berhasil'>Pembayaran Berhasil</h3>
            <h4 className='text-berhasil'>Selamat, kamu siap untuk mengikuti program beasiswa dengan bimbingan mentor ahli kami.</h4>
        </div>
    );
};

export default CardPembayaranBerhasil;