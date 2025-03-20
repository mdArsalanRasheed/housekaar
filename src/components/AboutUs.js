import React from 'react';
import './AboutUs.css';
import rohanImage from "../img/pexels-jonathanborba-5563472.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Our Company</h2>
        <p>
          Welcome to Housekaar, where we transform your dream spaces into reality. We believe in providing exceptional design services with a focus on affordability, efficiency, and customer satisfaction.
        </p>

        <p>
          <strong>Why Choose Us?</strong>
        </p>

        <ul>
          <li><strong>Best Pricing and Packages:</strong> We offer competitive pricing and tailored packages to fit your budget.</li>
          <li><strong>Fast and Easy Online Process:</strong> Our streamlined online process makes designing your space simple and convenient.</li>
          <li><strong>Space Planning and Optimization:</strong> We maximize your space's potential through expert planning and optimization.</li>
          <li><strong>Floor Plan and Drawing by Experts:</strong> Our experienced professionals create precise and detailed floor plans and drawings.</li>
          <li><strong>Elevation Design and 3D Views:</strong> Visualize your project with stunning elevation designs and realistic 3D views.</li>
          <li><strong>Unlimited Revisions at No Extra Cost:</strong> We're committed to your satisfaction and offer unlimited revisions until you're happy.</li>
          <li><strong>Super Responsive Support Team:</strong> Our dedicated support team is always ready to assist you with any questions or concerns.</li>
        </ul>

        <p>
          At Housekaar, we understand that creating your ideal space is a personal journey. We are committed to providing a seamless experience, from initial concept to final design. Our team of experts is dedicated to delivering high-quality results that exceed your expectations.
        </p>

        <p>
          We are passionate about creating functional and beautiful spaces that reflect your unique style and needs. Let us help you bring your vision to life.
        </p>
      </div>
      <div className="about-us-image">
        {/* Replace with your company image */}
        <img src={rohanImage} alt='housekaar'/>
      </div>
    </div>
  );
};

export default AboutUs;