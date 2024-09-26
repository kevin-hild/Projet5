// components/Rating.js
import React from 'react';

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <div className="rating-stars">
            {Array.from({ length: fullStars }).map((_, index) => (
                <span key={index} className="star full">&#9733;</span> // étoile pleine
            ))}
            {Array.from({ length: emptyStars }).map((_, index) => (
                <span key={index + fullStars} className="star empty">&#9733;</span> // étoile vide
            ))}
        </div>
    );
};

export default Rating;
