import React from 'react';
import { FaPlusCircle } from 'react-icons/fa'; // Import pin icon
import './ReusableSteps.css'; // Create ReusableSteps.css

const ReusableSteps = ({ steps }) => {
  return (
    <div className="reusable-steps-container">
      <div className="reusable-steps-content">
        <h2 className="steps-title">How It Works</h2>
        <div className="steps-list">
          {steps.map((step, index) => (
            <div className="step-item" key={index}>
              <div className="step-icon">
                <FaPlusCircle  className="add-circle-icon" />
              </div>
              <div className="step-details">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReusableSteps;