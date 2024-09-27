import React from 'react';

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);  // Nombre d'étoiles pleines
    const emptyStars = 5 - fullStars;      // Nombre d'étoiles vides

    const StarSVG = ({ color }) => (
        <svg className="star-icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.43233 1.3376C7.29777 1.05833 7.01344 0.880615 6.70117 0.880615C6.38891 0.880615 6.10711 1.05833 5.97001 1.3376L4.3376 4.6964L0.691971 5.23462C0.387322 5.28032 0.133448 5.49358 0.0395141 5.78553C-0.0544193 6.07749 0.0217428 6.39992 0.240075 6.61572L2.88544 9.2332L2.26091 12.9322C2.21014 13.2368 2.33707 13.5466 2.58841 13.7268C2.83975 13.9071 3.17232 13.9299 3.4465 13.7852L6.70371 12.0462L9.96091 13.7852C10.2351 13.9299 10.5677 13.9096 10.819 13.7268C11.0703 13.544 11.1973 13.2368 11.1465 12.9322L10.5194 9.2332L13.1648 6.61572C13.3831 6.39992 13.4618 6.07749 13.3654 5.78553C13.2689 5.49358 13.0176 5.28032 12.7129 5.23462L9.06474 4.6964L7.43233 1.3376Z" fill={color}/>
        </svg>
    );

    return (
        <div className="rating-stars">
            {Array.from({ length: fullStars }).map((_, index) => (
                <span key={index} className="star full">
                    <StarSVG color="#FF6060" /> {/* étoile pleine avec couleur #FF6060 */}
                </span>
            ))}
            {Array.from({ length: emptyStars }).map((_, index) => (
                <span key={index + fullStars} className="star empty">
                    <StarSVG color="#E3E3E3" /> {/* étoile vide avec couleur #E3E3E3 */}
                </span>
            ))}
        </div>
    );
};

export default Rating;

