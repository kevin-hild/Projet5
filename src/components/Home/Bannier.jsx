import React from 'react';
// import img from './Logo/IMG.jpg';
// import BannierImage from './Logo/IMG.jpg';

const Bannier = ({img,title}) => {
    return (
        <div className='bannier'>
            <img className='img_bannier' src={img} alt="" />
            <h1 className='titre_h1'>{title}</h1>
        </div>
    );
};

export default Bannier;