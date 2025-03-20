import React from 'react';
import './ArchitecturalServices.css'; // Use the same CSS file
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const BuildingInformationModeling = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="Building Information Modeling (BIM)"
      description="Building Information Modeling (BIM) is a revolutionary approach to architectural design and construction. At Housekaar, we leverage BIM to create intelligent 3D models that integrate all aspects of a building project."
    />
    <div className="architectural-services-page">
      <section>
        <h2>Our BIM Services</h2>
        <ul>
          <li><strong>3D Model Creation:</strong> Developing comprehensive 3D models with accurate building data.</li>
          <li><strong>Clash Detection:</strong> Identifying and resolving conflicts between building systems.</li>
          <li><strong>Quantity Takeoffs:</strong> Generating accurate material quantities for cost estimation.</li>
          <li><strong>Construction Sequencing:</strong> Planning and visualizing construction phases.</li>
          <li><strong>Facility Management:</strong> Providing data-rich models for building maintenance and operations.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of BIM</h2>
        <ul>
          <li><strong>Improved Collaboration:</strong> Facilitating seamless communication among project stakeholders.</li>
          <li><strong>Reduced Errors:</strong> Minimizing design and construction errors.</li>
          <li><strong>Enhanced Efficiency:</strong> Streamlining the design and construction process.</li>
          <li><strong>Cost Savings:</strong> Reducing construction costs and project delays.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Project Setup:</strong> Defining project goals and requirements.</li>
          <li><strong>Model Development:</strong> Creating a detailed BIM model using industry-standard software.</li>
          <li><strong>Data Integration:</strong> Incorporating building data and specifications.</li>
          <li><strong>Analysis and Coordination:</strong> Performing clash detection and quantity takeoffs.</li>
          <li><strong>Delivery and Support:</strong> Providing BIM models and support for construction and facility management.</li>
        </ol>
      </section>

      <section>
        <h2>View Our Portfolio</h2>
        <p>
          Browse our portfolio to see examples of our BIM projects. Contact us to discuss your project.
        </p>
      </section>
    </div>
    </>
  );
};

export default BuildingInformationModeling;