import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../Collapse';

const LocationDetail = () => {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const [location, setLocation] = useState(null);

    useEffect(() => {
        fetch('/logements.json') // Charge les données depuis le fichier JSON
            .then((response) => response.json())
            .then((data) => {
                const foundLocation = data.find((item) => item.id === id);
                setLocation(foundLocation);
            })
            .catch((error) => console.error('Erreur:', error));
    }, [id]);

    if (!location) {
        return <div>Chargement...</div>;
    }

    return (
        <div className='contenu-page'>
            <div className='img-carouselle'>
            <img src={location.cover} alt={location.title} />
            </div>
            <div className='info'>
                <div>
                    <h1 className='title2'>{location.title}</h1>
                    <p>{location.location}</p>
                    <p>{location.tags}</p>
                </div>
                <div className="host-info">
                    <p>{location.host.name}</p>
                    <img src={location.host.picture} alt={location.host.name} className="host-picture" />
                    <p>{location.rating}</p>
                </div>
            </div>
            <div>
            <Collapse
                    title="Description"
                    p={location.description}
                />
                <div className='collapse-equipements'>
                <Collapse
                    title="Equipments"
                    p={<ul>{location.equipments}</ul>}
                /></div>
            </div>
            {/* Ajoutez plus de détails ici comme équipements, tags, etc. */}
        </div>
    );
};

export default LocationDetail;
