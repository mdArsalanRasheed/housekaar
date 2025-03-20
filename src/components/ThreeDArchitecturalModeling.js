import React from 'react';
import './ArchitecturalServices.css';
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const ThreeDArchitecturalModeling = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="3D Architectural Modeling"
      description="Bring your architectural designs to life with our 3D architectural modeling services. We create realistic 3D models that provide a comprehensive view of your project, allowing you to visualize every detail."
    />
    <div className="architectural-services-page">
      <section>
        <h2>Our 3D Modeling Services</h2>
        <ul>
          <li><strong>Conceptual Models:</strong> Initial 3D models for design exploration and visualization.</li>
          <li><strong>Detailed Models:</strong> High-resolution 3D models with accurate dimensions and materials.</li>
          <li><strong>Building Information Modeling (BIM):</strong> Integrated 3D models with building data for analysis and coordination.</li>
          <li><strong>Interior Modeling:</strong> 3D models of interior spaces, including furniture and finishes.</li>
          <li><strong>Exterior Modeling:</strong> 3D models of building exteriors, showcasing architectural features and landscaping.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of 3D Modeling</h2>
        <ul>
          <li><strong>Enhanced Visualization:</strong> Providing a realistic view of the project.</li>
          <li><strong>Design Validation:</strong> Identifying potential design flaws and conflicts.</li>
          <li><strong>Client Communication:</strong> Facilitating clear communication with clients and stakeholders.</li>
          <li><strong>Marketing and Presentation:</strong> Creating compelling visuals for marketing and presentations.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Data Collection:</strong> Gathering architectural drawings and specifications.</li>
          <li><strong>Model Creation:</strong> Developing 3D models using industry-standard software.</li>
          <li><strong>Review and Refinement:</strong> Incorporating client feedback and refining the model.</li>
          <li><strong>Final Delivery:</strong> Providing 3D models in various formats (e.g., OBJ, FBX).</li>
        </ol>
      </section>

      <section>
        <h2>View Our Portfolio</h2>
        <p>
          Browse our portfolio to see examples of our 3D architectural models. Contact us to discuss your project.
        </p>
      </section>
    </div>
    </>
  );
};

export default ThreeDArchitecturalModeling;