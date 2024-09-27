import React, { useState, useEffect } from 'react';
import Bannier from '../components/Bannier';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom'; // Pour la navigation

const Accueil = () => {
    const [locations, setLocations] = useState([]);
    const navigate = useNavigate();

    // Charger les données du fichier JSON
    useEffect(() => {
        fetch('/logements.json') // Chemin du fichier JSON
            .then((response) => response.json())
            .then((data) => setLocations(data))
            .catch((error) => console.error('Erreur lors du chargement des données:', error));
    }, []);

    // Fonction pour naviguer vers la page de détails d'une location
    const handleCardClick = (id) => {
        navigate(`/location/${id}`); // Navigue vers la route des détails
    };

    return (
        <div>
            <div className='bannier img_bannier'>
                <Bannier
                    img="./assets/IMG.jpg"
                    title="Chez vous, partout et ailleurs"
                />
            </div>
            <section className='section_card'>
                <div className='card_contenu'>
                    {/* Génération des cartes dynamiquement à partir des données */}
                    {locations.map((location) => (
                        <Card
                            key={location.id}
                            title={location.title}
                            cover={location.cover}
                            onClick={() => handleCardClick(location.id)} // Clic pour naviguer
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Accueil;
