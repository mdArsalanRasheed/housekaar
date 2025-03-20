import React from 'react';
import './ArchitecturalServices.css';
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const ThreeDInteriorDesign = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="3D Interior Design"
      description="Visualize your interior spaces with our 3D interior design services. We create detailed 3D models and renderings that showcase your design concepts and material selections."
    />
    <div className="architectural-services-page">
      <section>
        <h2>Our 3D Interior Design Services</h2>
        <ul>
          <li><strong>Space Planning:</strong> 3D models of interior layouts with furniture and fixtures.</li>
          <li><strong>Material Selection:</strong> Realistic renderings of interior finishes and materials.</li>
          <li><strong>Lighting Design:</strong> Visualizations of interior lighting schemes.</li>
          <li><strong>Furniture Modeling:</strong> 3D models of custom and standard furniture.</li>
          <li><strong>Interior Renderings:</strong> Photorealistic images of interior spaces.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of 3D Interior Design</h2>
        <ul>
          <li><strong>Enhanced Visualization:</strong> Providing a realistic view of interior spaces.</li>
          <li><strong>Improved Design Communication:</strong> Facilitating clear communication with clients.</li>
          <li><strong>Material and Finish Selection:</strong> Helping clients visualize material and finish options.</li>
          <li><strong>Design Validation:</strong> Identifying potential design issues early in the process.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Design Concept:</strong> Discussing design goals and preferences.</li>
          <li><strong>Model Creation:</strong> Developing 3D models of interior spaces.</li>
          <li><strong>Material and Lighting Setup:</strong> Applying realistic materials and lighting.</li>
          <li><strong>Rendering and Refinement:</strong> Generating renderings and incorporating feedback.</li>
          <li><strong>Final Delivery:</strong> Providing 3D models and renderings.</li>
        </ol>
      </section>

      <section>
        <h2>View Our Portfolio</h2>
        <p>
          Browse our portfolio to see examples of our 3D interior designs. Contact us to discuss your project.
        </p>
      </section>
    </div>
    </>
  );
};

export default ThreeDInteriorDesign;