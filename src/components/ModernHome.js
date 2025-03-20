import React from 'react';
import modernHomeImage from '../img/exterior.jpg';
import './ProjectStyles.css'
import Button from './Button';

const ModernFamilyHome = () => {
  const [showDetails, setShowDetails] = React.useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className='project-container'>
      <h2>Modern Family Home Details</h2>
      <img className='project-image' src={modernHomeImage} alt="Modern Family Home"  />
      <p>This is a beautifully designed modern family home, perfect for comfortable living.</p>
      <Button onClick={handleButtonClick}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </Button>
      {showDetails && (
        <div className='project-details'>
          <h3>Key Features:</h3>
          <ul>
            <li>Spacious open-plan living area</li>
            <li>Modern kitchen with high-end appliances</li>
            <li>Large master bedroom with ensuite bathroom</li>
            <li>Beautifully landscaped garden with patio</li>
            <li>Energy-efficient design</li>
            <li>Attached two car garage</li>
          </ul>
          <p>
            The home features large windows that allow for plenty of natural light, creating a bright and airy atmosphere. The interior is designed with a minimalist aesthetic, using high-quality materials and finishes.
          </p>
          <p>
            The exterior of the home is clad in a combination of wood and concrete, giving it a contemporary and stylish look. The garden is perfect for outdoor entertaining, with a spacious patio and plenty of room for a barbecue.
          </p>
          <p>
            This home is located in a quiet and family-friendly neighborhood, with easy access to schools, parks, and shopping centers.
          </p>
        </div>
      )}
    </div>
  );
};

export default ModernFamilyHome;