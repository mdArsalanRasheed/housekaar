import React from 'react';
import './ReusableLanding.css'; // Create ReusableLanding.css

const ReusableLanding = ({ imageUrl, title, description, children }) => {
  return (
    <div
      className="reusable-landing-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="reusable-landing-content">
        <h1>{title}</h1>
        <p>{description}</p>
        {children} {/* Render any additional children passed to the component */}
      </div>
    </div>
  );
};

export default ReusableLanding;