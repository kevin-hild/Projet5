import React, { useEffect, useState } from 'react';
import Card from './Card'; // Importation du composant Card
import './App.scss'; // Votre fichier CSS

const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/logements.json') // Chemin vers votre fichier JSON
            .then((response) => response.json())
            .then((data) => setCards(data))
            .catch((error) => console.error('Erreur lors du chargement des données:', error));
    }, []);

    return (
        <div className="card-container">
            {cards.map((card) => (
                <Card 
                    key={card.id} 
                    id={card.id} 
                    title={card.title} 
                    cover={card.cover} 
                />
            ))}
        </div>
    );
};

export default CardList;
