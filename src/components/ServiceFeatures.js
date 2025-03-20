import React from 'react';
import './ServiceFeatures.css'; // Create ServiceFeatures.css

const ServiceFeatures = ({ features }) => {
  return (
    <div className="service-features-container">
      <div className="service-features-content">
        <h2 className="features-title">All House Design Services Include</h2>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li className="feature-item" key={index}>
              <span className="feature-icon">
                {feature.icon}
              </span>
              <span className="feature-text">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceFeatures;