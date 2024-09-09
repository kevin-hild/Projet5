import React from 'react';

const Card = ({ title, cover, onClick }) => {
    return (
        <div className='card' onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src={cover} alt={title} className='card-image' />
            <h3 className='title_card'>{title}</h3>
        </div>
    );
};

export default Card;

