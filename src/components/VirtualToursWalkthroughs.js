import React from 'react';
import './ArchitecturalServices.css';
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const VirtualToursWalkthroughs = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="Virtual Tours & Walkthroughs"
      description="Experience your architectural designs in an immersive way with our virtual tours and walkthroughs. We create interactive visualizations that allow you to explore building interiors and exteriors."
    />
    <div className="architectural-services-page">

      <section>
        <h2>Our Virtual Tour Services</h2>
        <ul>
          <li><strong>360-Degree Tours:</strong> Interactive views of building interiors and exteriors.</li>
          <li><strong>Walkthrough Animations:</strong> Animated visualizations of building layouts.</li>
          <li><strong>Interactive Presentations:</strong> Engaging presentations with virtual tours and animations.</li>
          <li><strong>Real-Time Rendering:</strong> Dynamic visualizations for interactive exploration.</li>
          <li><strong>VR Integration:</strong> Virtual reality experiences for immersive viewing.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Virtual Tours</h2>
        <ul>
          <li><strong>Enhanced Engagement:</strong> Providing an immersive and interactive experience.</li>
          <li><strong>Improved Understanding:</strong> Helping clients visualize complex designs.</li>
          <li><strong>Remote Presentations:</strong> Facilitating remote presentations and client meetings.</li>
          <li><strong>Marketing and Sales:</strong> Creating compelling visuals for marketing and sales.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Model Preparation:</strong> Optimizing 3D models for virtual tours.</li>
          <li><strong>Tour Creation:</strong> Developing interactive tours and animations.</li>
          <li><strong>Review and Refinement:</strong> Incorporating client feedback and refining the tour.</li>
          <li><strong>Delivery and Integration:</strong> Providing virtual tours and integrating them into presentations.</li>
        </ol>
      </section>

      <section>
        <h2>View Our Portfolio</h2>
        <p>
          Browse our portfolio to see examples of our virtual tours and walkthroughs. Contact us to discuss your project.
        </p>
      </section>
    </div>
    </>
  );
};

export default VirtualToursWalkthroughs;
