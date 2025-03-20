import React from 'react';
import './ArchitecturalServices.css'; // Use the same CSS file
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const FootingConstruction = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="Footing Construction"
      description="A strong foundation is crucial for any building. At Housekaar, we specialize in footing construction, ensuring your structure rests on a solid and reliable base."
    />
    <div className="architectural-services-page">
      <section>
        <h2>Our Footing Construction Services</h2>
        <ul>
          <li><strong>Foundation Layout:</strong> Precise marking and setting of footing locations.</li>
          <li><strong>Excavation:</strong> Proper digging and preparation of footing trenches.</li>
          <li><strong>Reinforcement Installation:</strong> Placing steel rebar for structural integrity.</li>
          <li><strong>Concrete Pouring:</strong> Pouring and leveling concrete to form the footing.</li>
          <li><strong>Inspection and Quality Control:</strong> Ensuring footings meet all building codes and standards.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Our Footing Construction</h2>
        <ul>
          <li><strong>Structural Stability:</strong> Providing a strong and stable base for your building.</li>
          <li><strong>Long-Term Durability:</strong> Using high-quality materials for lasting performance.</li>
          <li><strong>Prevention of Settlement:</strong> Ensuring even distribution of building weight.</li>
          <li><strong>Compliance with Standards:</strong> Adhering to all local building codes and regulations.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Site Assessment:</strong> Evaluating soil conditions and building plans.</li>
          <li><strong>Layout and Excavation:</strong> Marking and digging the footing trenches.</li>
          <li><strong>Reinforcement and Formwork:</strong> Installing rebar and setting up forms for concrete.</li>
          <li><strong>Concrete Pouring and Curing:</strong> Pouring concrete and allowing it to cure properly.</li>
          <li><strong>Inspection and Backfilling:</strong> Inspecting the footings and backfilling the trenches.</li>
        </ol>
      </section>

      <section>
        <h2>Get Started</h2>
        <p>
          Contact us today to discuss your footing construction needs. Let us provide a reliable foundation for your building project.
        </p>
      </section>
    </div>
    </>
  );
};

export default FootingConstruction;