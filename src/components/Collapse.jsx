import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({title, p}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapsible-wrapper">
        <div className="collapsible-header">
          <h3 className='section_title'>{title}</h3>
          <button type="button" className="arrow-button" onClick={toggleCollapse}>
            <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} className="arrow-icon" />
          </button>
        </div>
        <div className="content" style={{ display: isOpen ? 'block' : 'none' }}>
          {typeof p === 'string' ? <p>{p}</p> : p}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
// animation Collapse a faire