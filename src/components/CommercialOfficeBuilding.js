import React, { useState } from 'react';
import commercialBuildingImage from '../img/exterior.jpg';
import './ProjectStyles.css';
import Button from './Button';

const CommercialOfficeBuilding = () => {
  const [showPlans, setShowPlans] = useState(false);

  const handleButtonClick = () => {
    setShowPlans(!showPlans);
  };

  return (
    <div className='project-container'>
      <h2>Commercial Office Building Details</h2>
      <img  className='project-image' src={commercialBuildingImage} alt="Commercial Office Building" />
      <p>A modern and efficient commercial office building designed for productivity.</p>
      <Button onClick={handleButtonClick} className="custom-button">
        {showPlans ? 'Hide Plans' : 'View Plans'}
      </Button>
      {showPlans && (
        <div className='project-details'>
          <h3>Building Plans:</h3>
          <p>
            The building features a flexible floor plan designed to accommodate a variety of business needs. Key features include:
          </p>
          <ul>
            <li>Open-plan office spaces with customizable layouts</li>
            <li>Dedicated meeting rooms and conference facilities</li>
            <li>High-speed internet and advanced telecommunications infrastructure</li>
            <li>Energy-efficient HVAC and lighting systems</li>
            <li>On-site cafeteria and break areas</li>
            <li>Secure access control and 24/7 security monitoring</li>
            <li>Ample parking for employees and visitors</li>
            <li>Large windows for natural lighting.</li>
          </ul>
          <p>
            The building is designed with sustainability in mind, incorporating eco-friendly materials and energy-saving technologies.
          </p>
          <p>
            Floor plans are available upon request. Please contact our leasing office for more information.
          </p>
        </div>
      )}
    </div>
  );
};

export default CommercialOfficeBuilding;