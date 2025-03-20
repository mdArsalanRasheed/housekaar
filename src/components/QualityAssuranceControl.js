import React from 'react';
import './ConstructionManagement.css';
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const QualityAssuranceControl = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="Quality Assurance & Control"
      description="Delivering high-quality construction is our commitment. At Housekaar, we implement rigorous quality assurance and control measures to ensure every project meets our standards."
    />
    <div className="management-page">

      <section>
        <h2>Our Quality Assurance Services</h2>
        <ul>
          <li><strong>Quality Planning:</strong> Developing quality control plans and procedures.</li>
          <li><strong>Inspection and Testing:</strong> Conducting regular inspections and tests.</li>
          <li><strong>Defect Prevention:</strong> Implementing measures to prevent defects and errors.</li>
          <li><strong>Documentation:</strong> Maintaining detailed records of quality control activities.</li>
          <li><strong>Continuous Improvement:</strong> Continuously improving quality control processes.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Quality Assurance</h2>
        <ul>
          <li><strong>High-Quality Workmanship:</strong> Ensuring projects meet quality standards.</li>
          <li><strong>Reduced Rework:</strong> Minimizing defects and errors.</li>
          <li><strong>Client Satisfaction:</strong> Delivering projects that meet client expectations.</li>
          <li><strong>Long-Term Durability:</strong> Ensuring the longevity of construction projects.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Planning:</strong> Developing quality control plans and procedures.</li>
          <li><strong>Inspection:</strong> Conducting regular inspections and tests.</li>
          <li><strong>Analysis:</strong> Analyzing inspection results and identifying areas for improvement.</li>
          <li><strong>Improvement:</strong> Implementing corrective actions and improving processes.</li>
        </ol>
      </section>

      <section>
        <h2>Get Started</h2>
        <p>
          Contact us today to learn more about our quality assurance and control services. Let us ensure the highest quality standards for your construction project.
        </p>
      </section>
    </div>
    </>
  );
};

export default QualityAssuranceControl;