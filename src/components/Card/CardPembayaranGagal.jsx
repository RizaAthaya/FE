import React from 'react';
import berhasil from "../../assets/gagalPay.svg"
import "../../css/CardPembayaranGagal.css";

const CardPembayaranGagal = props => {
    return (
        <div className='pembayaran-gagal'>
            <img src={berhasil} className="gambar-gagal"></img>
            <h3 className='title-gagal'>Pembayaran Gagal</h3>
            <h4 className='text-gagal'>Maaf, pembayaran kamu tidak terkonfirmasi oleh sistem kami. Mohon pastikan anda sudah membayar dan konfirmasi sekali lagi.</h4>
        </div>
    );
};

export default CardPembayaranGagal;