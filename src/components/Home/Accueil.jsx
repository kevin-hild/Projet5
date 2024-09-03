import React from 'react';
import Bannier from './Bannier';
import Card from '../Card';

const Accueil = () => {
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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            </section>
        </div>
    );
};

export default Accueil;