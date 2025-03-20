import React, { useState } from 'react';
import apartmentComplexImage from '../img/exterior.jpg'; 
import './ProjectStyles.css'
import Button from './Button';


const LuxuryApartmentComplex = () => {
  const [showAvailability, setShowAvailability] = useState(false);

  const handleButtonClick = () => {
    setShowAvailability(!showAvailability);
  };

  return (
    <div className='project-container'>
      <h2>Luxury Apartment Complex Details</h2>
      <img className='project-image' src={apartmentComplexImage} alt="Luxury Apartment Complex" />
      <p>Experience unparalleled luxury in our exclusive apartment complex.</p>
      <Button onClick={handleButtonClick} className="special-button">
        {showAvailability ? 'Hide Availability' : 'Check Availability'}
      </Button>
      {showAvailability && (
        <div className='project-details' >
          <h3>Available Apartments:</h3>
          <ul>
            <li>
              <strong>Penthouse Suite:</strong> 3 Bedrooms, 3.5 Baths, Panoramic City Views - $5,000/month
            </li>
            <li>
              <strong>Deluxe Apartment:</strong> 2 Bedrooms, 2 Baths, Balcony with Ocean View - $3,500/month
            </li>
            <li>
              <strong>Standard Apartment:</strong> 1 Bedroom, 1 Bath, Modern Amenities - $2,500/month
            </li>
          </ul>
          <p>
            Our complex offers a range of luxurious amenities, including a rooftop pool, fitness center, spa, and 24/7 concierge service. Enjoy breathtaking views and unparalleled comfort in our meticulously designed apartments.
          </p>
          <p>
            Contact our leasing office to schedule a tour and secure your dream apartment today.
          </p>
          <p>
            All apartments include access to resident only parking, and all utilities except for electricity.
          </p>
        </div>
      )}
    </div>
  );
};

export default LuxuryApartmentComplex;