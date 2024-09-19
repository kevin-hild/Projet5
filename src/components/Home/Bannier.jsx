const Bannier = ({ img, title }) => {
    const splitTitle = title.split(','); // Sépare le titre en deux parties à partir de la virgule

    return (
        <div className='bannier'>
            <img className='img_bannier' src={img} alt="" />
            {/* Affiche uniquement le h1 si le titre est non vide */}
            {title && (
                <h2 className='titre_h1'> 
                    {splitTitle[0]}
                    {/* Si le titre a une deuxième partie, on ajoute la virgule et l'espace insécable */}
                    {splitTitle[1] && `,\u00A0`}
                    <span className='new-line'>{splitTitle[1]}</span>
                </h2>
            )}
        </div>
    );
};

export default Bannier;