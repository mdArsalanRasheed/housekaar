import React, { useState } from 'react';
import historicalHouseImage from '../img/exterior.jpg';
import './ProjectStyles.css'
import Button from './Button';

const RenovatedHistoricalHouse = () => {
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  const handleButtonClick = () => {
    setShowBeforeAfter(!showBeforeAfter);
  };

  return (
    <div className='project-container'>
      <h2>Renovated Historical House Details</h2>
      <img  className='project-image' src={historicalHouseImage} alt="Renovated Historical House" />
      <p>A beautifully renovated historical house, blending classic charm with modern comfort.</p>
      <Button onClick={handleButtonClick}>
        {showBeforeAfter ? 'Hide Before/After' : 'See Before/After'}
      </Button>
      {showBeforeAfter && (
        <div className='project-details'>
          <h3>Before and After Renovation:</h3>
          <p>
            This historical house underwent a complete renovation, preserving its original architectural details while adding modern amenities.
          </p>
          <h4>Before:</h4>
          <p>
            The house was in a state of disrepair, with outdated fixtures, worn-out flooring, and a cramped layout. The exterior was showing signs of age, with peeling paint and weathered wood.
          </p>
          <h4>After:</h4>
          <p>
            The renovation transformed the house into a bright and spacious home. The original hardwood floors were restored, and the layout was reconfigured to create an open-plan living area. Modern kitchen and bathroom fixtures were installed, and the exterior was repainted and repaired.
          </p>
          <p>
            The renovation preserved the historical character of the house, including the original windows, doors, and moldings. The result is a beautiful blend of old and new, creating a unique and comfortable living space.
          </p>
          <p>
            The house now features updated electrical and plumbing, as well as modern insulation and HVAC systems.
          </p>
        </div>
      )}
    </div>
  );
};

export default RenovatedHistoricalHouse;