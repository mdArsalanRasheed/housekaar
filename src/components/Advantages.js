import React from 'react';
import './Advantages.css'; // Create Advantages.css

const Advantages = ({ advantages }) => {
  return (
    <div className="advantages-container">
      <div className="advantages-content">
        <h2 className="advantages-title">Advantages and Benefits</h2>
        <ul className="advantages-list">
          {advantages.map((advantage, index) => (
            <li className="advantage-item" key={index}>
              <span className="advantage-icon">
                {advantage.icon}
              </span>
              <div className="advantage-details">
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;