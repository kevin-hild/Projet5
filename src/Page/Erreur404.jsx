import React from 'react';
import { Link } from "react-router-dom";

const Erreur404 = () => {
    return (
        <div className='page-erreur'>
            <h1>404</h1>
            <div className='message-erreur'>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link className='lien-retour' to="/">Retour sur la page d'accueil</Link>
        </div>
    );
};

export default Erreur404;