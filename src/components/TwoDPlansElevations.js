import React from 'react';
import './ArchitecturalServices.css'; // Create this CSS file
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const TwoDPlansElevations = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="2D Floor Plans & Elevations"
      description="Accurate and detailed 2D floor plans and elevations are the foundation of any successful architectural project. At Housekaar, we provide comprehensive 2D drafting services to ensure your vision is precisely translated into technical drawings."
    />
    <div className="architectural-services-page">
      <section>
        <h2>Our 2D Services</h2>
        <ul>
          <li><strong>Floor Plans:</strong> Detailed layouts showing room dimensions, wall placements, and furniture arrangements.</li>
          <li><strong>Elevations:</strong> Orthographic views of building facades, showcasing exterior finishes and architectural details.</li>
          <li><strong>Site Plans:</strong> Overviews of the property, including building footprints, landscaping, and site features.</li>
          <li><strong>Construction Drawings:</strong> Technical drawings for builders, including structural details and material specifications.</li>
          <li><strong>As-Built Drawings:</strong> Documentation of existing buildings for renovations or modifications.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Our 2D Services</h2>
        <ul>
          <li><strong>Precision and Accuracy:</strong> Ensuring every detail is accurately represented.</li>
          <li><strong>Clear Communication:</strong> Facilitating clear communication between architects, builders, and clients.</li>
          <li><strong>Cost-Effective:</strong> Identifying potential issues early in the design process to avoid costly revisions.</li>
          <li><strong>Customization:</strong> Tailoring drawings to meet specific project requirements.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Initial Consultation:</strong> Discussing project requirements and design goals.</li>
          <li><strong>Drafting and Design:</strong> Creating detailed 2D drawings based on client specifications.</li>
          <li><strong>Review and Revisions:</strong> Incorporating client feedback and making necessary revisions.</li>
          <li><strong>Final Delivery:</strong> Providing final 2D drawings in various formats (e.g., PDF, DWG).</li>
        </ol>
      </section>

      <section>
        <h2>View Our Portfolio</h2>
        <p>
          Browse our portfolio to see examples of our 2D floor plans and elevations. Contact us to discuss your project.
        </p>
      </section>
    </div>
    </>
  );
};

export default TwoDPlansElevations;