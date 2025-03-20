import React from 'react';
import './ArchitecturalServices.css';
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const ThreeDRenderingVisualization = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="3D Rendering & Visualization"
      description="Transform your 3D models into stunning photorealistic images with our 3D rendering and visualization services. We create high-quality renderings that showcase your architectural designs in their best light."
    />
    <div className="architectural-services-page">
      <section>
        <h2>Our Rendering Services</h2>
        <ul>
          <li><strong>Interior Renderings:</strong> Photorealistic images of interior spaces with lighting and materials.</li>
          <li><strong>Exterior Renderings:</strong> Realistic images of building exteriors with landscaping and surroundings.</li>
          <li><strong>Walkthrough Animations:</strong> Animated visualizations of building interiors and exteriors.</li>
          <li><strong>Virtual Tours:</strong> Interactive 360-degree views of architectural spaces.</li>
          <li><strong>Product Renderings:</strong> High-quality renderings of architectural products and materials.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of 3D Rendering</h2>
        <ul>
          <li><strong>Realistic Visuals:</strong> Creating lifelike images that accurately represent the design.</li>
          <li><strong>Enhanced Presentation:</strong> Making compelling presentations to clients and stakeholders.</li>
          <li><strong>Marketing and Sales:</strong> Using renderings for marketing materials and sales presentations.</li>
          <li><strong>Design Communication:</strong> Clearly communicating design concepts and details.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Model Preparation:</strong> Optimizing 3D models for rendering.</li>
          <li><strong>Material and Lighting Setup:</strong> Applying realistic materials and lighting.</li>
          <li><strong>Rendering and Post-Processing:</strong> Generating high-quality renderings and performing post-processing.</li>
          <li><strong>Final Delivery:</strong> Providing renderings in various formats (e.g., JPG, PNG).</li>
        </ol>
      </section>

      <section>
        <h2>View Our Portfolio</h2>
        <p>
          Browse our portfolio to see examples of our 3D renderings and visualizations. Contact us to discuss your project.
        </p>
      </section>
    </div>
    </>
  );
};

export default ThreeDRenderingVisualization;