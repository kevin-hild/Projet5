import React from 'react';

const Bannier = ({img,title}) => {
    return (
        <div className='bannier'>
            <img className='img_bannier' src={img} alt="" />
            <h1 className='titre_h1'>{title}</h1>
        </div>
    );
};

export default Bannier;