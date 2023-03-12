import React from 'react';
import "../../css/ButtonPengajuan.css";

const ButtonPengajuan = props => {
    return (
        <div className='button-pengajuan'>
            <button className='btn-pengajuan'>09.00 WIB</button>
            <button className='btn-pengajuan'>13.00 WIB</button>
            <button className='btn-pengajuan'>15.00 WIB</button>
        </div>
    );
};

export default ButtonPengajuan;