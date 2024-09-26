// components/Carrousel.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';

const Arrow = ({ direction, onClick }) => (
    <div 
        className={`slick-arrow slick-${direction} slick-arrow-${direction}`} // Ajout de classes distinctes
        onClick={onClick} 
        style={{ cursor: 'pointer' }}
    >
        <img className='arrow'
            src={direction === 'left' ? arrowLeft : arrowRight} 
            alt={`arrow-${direction}`} 
        />
    </div>
);

const Carousel = ({ pictures, title }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const isSingleImage = pictures.length === 1;

    const settings = {
        infinite: !isSingleImage,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        nextArrow: isSingleImage ? null : <Arrow direction="right" />,
        prevArrow: isSingleImage ? null : <Arrow direction="left" />,
        afterChange: (index) => setCurrentSlide(index),
    };

    return (
        <div className='img-carousel'>
            {isSingleImage ? (
                <img src={pictures[0]} alt={title} className="carousel-image" />
            ) : (
                <Slider {...settings}>
                    {pictures.map((picture, index) => (
                        <div key={index} className="carousel-slide">
                            <img src={picture} alt={`${title} ${index}`} className="carousel-image" />
                            <div className="image-counter">
                                {currentSlide + 1}/{pictures.length}
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default Carousel;
