import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Chevron icons
import Collapse from '../Collapse';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LocationDetail = () => {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true); // Nouveau state pour gérer le chargement

    useEffect(() => {
        fetch('/logements.json') // Charge les données depuis le fichier JSON
            .then((response) => response.json())
            .then((data) => {
                const foundLocation = data.find((item) => item.id === id);
                setLocation(foundLocation);
                setLoading(false); // Terminer le chargement une fois les données récupérées
            })
            .catch((error) => {
                console.error('Erreur:', error);
                setLoading(false); // Terminer le chargement en cas d'erreur
            });
    }, [id]);

    if (loading) {
        return <div>Chargement...</div>; // Afficher un message de chargement
    }

    if (!location) {
        return <Navigate to="/404" />; // Redirection vers la page d'erreur 404 si la location n'est pas trouvée
    }

    // Fonction pour générer des étoiles avec FontAwesome
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); // Partie entière des étoiles
        const emptyStars = 5 - fullStars; // Étoiles vides pour compléter

        return (
            <>
                {Array.from({ length: fullStars }).map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="star full" />
                ))}
                {Array.from({ length: emptyStars }).map((_, index) => (
                    <FontAwesomeIcon key={index + fullStars} icon={faStar} className="star empty" />
                ))}
            </>
        );
    };

    // Flèche personnalisée "Précédent"
    const PrevArrow = ({ onClick }) => (
        <div className="slick-prev slick-arrow" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
    );

    // Flèche personnalisée "Suivant"
    const NextArrow = ({ onClick }) => (
        <div className="slick-next slick-arrow" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    );

    // Désactiver le carrousel et les flèches si une seule image
    const isSingleImage = location.pictures.length === 1;

    // Configuration du carrousel
    const settings = {
        infinite: !isSingleImage, // Désactiver l'infinité si une seule image
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        nextArrow: isSingleImage ? null : <NextArrow />, // Désactiver la flèche "Suivant" si une seule image
        prevArrow: isSingleImage ? null : <PrevArrow />, // Désactiver la flèche "Précédent" si une seule image
        fade: false,
    };

    return (
        <div className='contenu-page'>
            {/* Carrousel d'images */}
            <div className='img-carousel'>
                {isSingleImage ? (
                    <img src={location.pictures[0]} alt={`${location.title}`} className="carousel-image" />
                ) : (
                    <Slider {...settings}>
                        {location.pictures.map((picture, index) => (
                            <div key={index}>
                                <img src={picture} alt={`${location.title} ${index}`} className="carousel-image" />
                            </div>
                        ))}
                    </Slider>
                )}
            </div>

            <div className='info'>
                <div className='title-info'>
                    <h1 className='title2'>{location.title}</h1>  
                    <p>{location.location}</p>
                    <div className="tags-container">
                        {location.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="host-info">
                    <div className='name-photo'>
                        <p>
                            {location.host.name.split(' ')[0]}<br />
                            {location.host.name.split(' ')[1]}
                        </p>
                        <img src={location.host.picture} alt={location.host.name} className="host-picture" />
                    </div>
                    <div className="rating-stars">
                        {renderStars(parseInt(location.rating, 10))} {/* Remplace la note par des étoiles */}
                    </div>
                </div>
            </div>
            <div className='description-equipement'>
                <div className='collapse-description'>
                    <Collapse
                        title="Description"
                        p={location.description}
                    />
                </div>
                <div className='collapse-equipements'>
                    <Collapse
                        title="Equipments"
                        p={(
                            <ul>
                                {location.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default LocationDetail;
//  titre a changez en h2 