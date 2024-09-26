// pages/LocationDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Collapse from '../Collapse';
import Carousel from '../Carrousel';  // Import du composant Carousel
import Tags from '../Tags';          // Import du composant Tags
import User from '../User';          // Import du composant User
import Rating from '../Rating';      // Import du composant Rating

const LocationDetail = () => {
    const { id } = useParams();
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/logements.json')
            .then((response) => response.json())
            .then((data) => {
                const foundLocation = data.find((item) => item.id === id);
                setLocation(foundLocation);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Erreur:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (!location) {
        return <Navigate to="/404" />;
    }

    return (
        <div className='contenu-page'>
            {/* Carrousel d'images */}
            <Carousel pictures={location.pictures} title={location.title} />

            <div className='info'>
                <div className='title-info'>
                    <h2 className='title2'>{location.title}</h2>  
                    <p>{location.location}</p>
                    <Tags tags={location.tags} />  {/* Utilisation du composant Tags */}
                </div>
                <div className='user-star'>
                <User host={location.host} />       {/* Utilisation du composant User */}
                {/* Déplacer le composant Rating ici */}
                <Rating rating={parseInt(location.rating, 10)} /> {/* Utilisation du composant Rating */}
                </div>
            </div>

            <div className='description-equipement'>
                <div className='collapse-description'>
                    <Collapse title="Description" p={location.description} />
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
