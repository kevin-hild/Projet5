import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, p }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0); // État pour stocker la hauteur dynamique
  const contentRef = useRef(null); // Référence au contenu du collapse

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Mettre à jour la hauteur de manière dynamique
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className="collapse-container">
      <div className="collapsible-wrapper">
        <div className="collapsible-header">
          <h3 className='section_title'>{title}</h3>
          <button type="button" className="arrow-button" onClick={toggleCollapse}>
            {/* Icône qui tourne selon l'état isOpen */}
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`arrow-icon ${isOpen ? 'open' : ''}`} // Ajout d'une classe 'open' pour l'animation
            />
          </button>
        </div>
        {/* Contenu du collapse avec transition de hauteur */}
        <div
          className="collapsible-content"
          style={{ height: `${height}px` }} // Appliquer la hauteur dynamique
          ref={contentRef} // Référence pour calculer la hauteur
        >
          <div className="content">
            {typeof p === 'string' ? <p>{p}</p> : p}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;