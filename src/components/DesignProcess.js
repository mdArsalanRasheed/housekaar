import React from 'react';
import './DesignProcess.css'; // Import your CSS file
import Button from './Button'; // Import your Button component
import { Link } from 'react-router-dom';

const DesignProcess = () => {
 
  return (
    <div className="design-process-container">
      <h2>Easier, Faster and Affordable Than You Can Think</h2>
      <p>Personalized House Plan, Elevation and Interior Design Process</p>
      <div className="process-steps">
        <div className="process-step">
          <h3>Tell us what you need</h3>
          <p>
            Tell us about your functional requirements, likes, dislikes, tentative budget etc. along with the layout of the plot or space.
          </p>
        </div>
        <div className="process-step">
          <h3>Get custom plans and designs</h3>
          <p>
            We'll create the floor plan, furniture layout, elevation an interactive 3D designs of you that'll fit your style and budget.
          </p>
        </div>
        <div className="process-step">
          <h3>Review and delivery</h3>
          <p>
            We'll make changes in the design until you're 100% happy, and deliver all the designs and drawings when approved.
          </p>
        </div>
      </div>
      <p>
        Wondering how it works?
        <Link to="/designpage">
        <Button>Know about our design process</Button></Link>
      </p>
    </div>
  );
};

export default DesignProcess;