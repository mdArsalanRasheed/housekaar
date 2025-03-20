import React from 'react';
import './ConstructionManagement.css'; // Use the same CSS file
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const SafetyProtocolsCompliance = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="Safety Protocols & Compliance"
      description="Ensuring a safe and compliant construction site is our top priority. At Housekaar, we adhere to stringent safety protocols and regulatory compliance to protect our workers and stakeholders."
    />
    <div className="management-page">
      <section>
        <h2>Our Safety & Compliance Services</h2>
        <ul>
          <li><strong>Safety Training:</strong> Providing comprehensive safety training to all personnel.</li>
          <li><strong>Hazard Assessments:</strong> Conducting thorough hazard assessments and risk evaluations.</li>
          <li><strong>Compliance Audits:</strong> Performing regular audits to ensure compliance with safety regulations.</li>
          <li><strong>Emergency Response Plans:</strong> Developing and implementing emergency response plans.</li>
          <li><strong>Safety Equipment Management:</strong> Ensuring proper use and maintenance of safety equipment.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Safety & Compliance</h2>
        <ul>
          <li><strong>Reduced Accidents:</strong> Minimizing workplace accidents and injuries.</li>
          <li><strong>Legal Compliance:</strong> Ensuring adherence to all local and national regulations.</li>
          <li><strong>Improved Morale:</strong> Creating a safe and secure work environment.</li>
          <li><strong>Risk Mitigation:</strong> Proactively addressing potential safety hazards.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Planning:</strong> Developing safety protocols and compliance plans.</li>
          <li><strong>Training:</strong> Conducting safety training sessions for all personnel.</li>
          <li><strong>Implementation:</strong> Enforcing safety protocols and conducting regular audits.</li>
          <li><strong>Monitoring:</strong> Tracking safety performance and making necessary adjustments.</li>
        </ol>
      </section>

      <section>
        <h2>Get Started</h2>
        <p>
          Contact us today to learn more about our safety protocols and compliance services. Let us ensure a safe and compliant construction site for your project.
        </p>
      </section>
    </div>
    </>
  );
};

export default SafetyProtocolsCompliance;