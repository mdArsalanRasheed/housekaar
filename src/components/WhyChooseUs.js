import React from 'react';
import './WhyChooseUs.css';
import { FaCheckCircle, FaRocket, FaUsers, FaShieldAlt, FaMoneyBillWave, FaLightbulb, FaTools } from 'react-icons/fa'; // Import icons

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features">
        <div className="feature">
          <FaCheckCircle className="feature-icon" />
          <h3>Expertise and Experience</h3>
          <p>We have years of experience and a team of experts dedicated to delivering high-quality results.</p>
        </div>
        <div className="feature">
          <FaRocket className="feature-icon" />
          <h3>Fast and Efficient Service</h3>
          <p>We prioritize efficiency and ensure your project is completed on time and within budget.</p>
        </div>
        <div className="feature">
          <FaUsers className="feature-icon" />
          <h3>Customer-Centric Approach</h3>
          <p>Your satisfaction is our top priority. We work closely with you to understand your needs and exceed your expectations.</p>
        </div>
        <div className="feature">
          <FaShieldAlt className="feature-icon" />
          <h3>Reliability and Trust</h3>
          <p>We are a reliable and trustworthy partner, committed to providing transparent and honest service.</p>
        </div>
        <div className="feature">
          <FaMoneyBillWave className="feature-icon" />
          <h3>Competitive Pricing</h3>
          <p>We offer competitive pricing without compromising on the quality of our services.</p>
        </div>
        <div className="feature">
          <FaLightbulb className="feature-icon" />
          <h3>Innovative Solutions</h3>
          <p>We provide creative and innovative solutions to meet your unique challenges.</p>
        </div>
        <div className="feature">
          <FaTools className="feature-icon" />
          <h3>Comprehensive Services</h3>
          <p>We offer a wide range of services to cover all your needs.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;