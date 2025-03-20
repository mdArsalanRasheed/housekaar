import React from 'react';
import './PricingPackages.css'; // Create PricingPackages.css
import { Link } from 'react-router-dom';

const PricingPackages = () => {
  return (
    <div className="pricing-packages">
      <div className="pricing-content">
        <h2>Pricing and Packages</h2>
        <p>House plan and interior designing packages starting at Rs. 4499 only.</p>
        <p>We work within your budget, whether you want top quality or the best budget look for your house design.</p>
        <p>Simple, transparent pricing that no famous architect and interior firms can match.</p>
        <p>Crafted and reviewed by a team of highly experienced architects and interior designers.</p>
        <Link to="/pricing" className="view-packages-button">View All Design Packages</Link>
      </div>
    </div>
  );
};

export default PricingPackages;