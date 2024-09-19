import React from 'react';
import Bannier from '../Home/Bannier';
import Collapse from '../Collapse';

const A_Propos = () => {
    return (
        <div>
            <div className='bannier bannier2'>
                <Bannier
                    img="./assets/IMG2.jpg"
                    title=" "
                />
            </div>
            <div className='collapse-aPropos'>
                <Collapse
                    title="Fiabilité"
                    p="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                    et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Collapse
                    title="Respect"
                    p="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou
                    de perturbation du voisinage entraînera une exclusion de la plateforme."
                />
                <Collapse
                    title="Service"
                    p="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit nos hôtes ou nos locataires,
                    soit empreinte de respect et de bienveillance."
                />
                <Collapse
                    title="Sécurité"
                    p="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
    );
};

export default A_Propos;