import React from 'react';
import './ArchitecturalServices.css';
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const Renovations = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="Renovations"
      description="Transform your existing spaces with our comprehensive renovation services. At Housekaar, we breathe new life into homes and commercial properties, enhancing their functionality and aesthetics."
    />
    <div className="architectural-services-page">
      <section>
        <h2>Our Renovation Services</h2>
        <ul>
          <li><strong>Home Renovations:</strong> Updating kitchens, bathrooms, living rooms, and more.</li>
          <li><strong>Office Renovations:</strong> Modernizing office spaces for improved productivity.</li>
          <li><strong>Retail Renovations:</strong> Enhancing retail environments for better customer experience.</li>
          <li><strong>Historical Renovations:</strong> Preserving and restoring historical buildings.</li>
          <li><strong>Exterior Renovations:</strong> Updating building facades and landscaping.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Our Renovations</h2>
        <ul>
          <li><strong>Increased Property Value:</strong> Enhancing the value of your property.</li>
          <li><strong>Improved Functionality:</strong> Optimizing spaces for better usability.</li>
          <li><strong>Modernization:</strong> Updating outdated spaces with modern designs and materials.</li>
          <li><strong>Personalization:</strong> Tailoring renovations to meet your specific needs and preferences.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Initial Assessment:</strong> Evaluating the existing space and discussing renovation goals.</li>
          <li><strong>Design and Planning:</strong> Developing renovation plans and selecting materials.</li>
          <li><strong>Demolition and Preparation:</strong> Preparing the space for renovation.</li>
          <li><strong>Construction and Installation:</strong> Executing the renovation with skilled professionals.</li>
          <li><strong>Final Inspection:</strong> Reviewing the completed renovation with you.</li>
        </ol>
      </section>

      <section>
        <h2>Get Started</h2>
        <p>
          Contact us today to discuss your renovation project. Let us help you transform your space into something extraordinary.
        </p>
      </section>
    </div>
    </>
  );
};

export default Renovations;