import React from 'react';
import Bannier from './Bannier';

const Accueil = () => {
    return (
        <div className='bannier img_bannier'>
            <Bannier
                img="./IMG.jpg"
                title="Chez vous, partout et ailleurs"
            />
        </div>
    );
};

export default Accueil;