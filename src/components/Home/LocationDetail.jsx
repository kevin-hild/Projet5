import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Collapse from '../Collapse';

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

    return (
        <div className='contenu-page'>
            <div className='img-carousel'>
                <img src={location.cover} alt={location.title} />
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
