import React from 'react';
import imgK from './Logo/K.png'
import imgL from './Logo/logo.png'
import imgS from './Logo/S.png'
import imgA from './Logo/A.png'


const Footer = () => {
    return (
        <footer>
            <div className='logo_copyright'>
                <div className='logo_footer'>
                    <img className='img-footer' src={imgK} alt="Lettre K" />
                    <img className='img-footer' src={imgL} alt="Logo" />
                    <img className='img-footer' src={imgS} alt="Lettre S" />
                    <img className='img-footer' src={imgA} alt="Lettre A" />
                </div>
                <p className='copyright'>© 2024 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;