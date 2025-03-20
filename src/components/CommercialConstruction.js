import React from 'react';
import './ArchitecturalServices.css';
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const CommercialConstruction = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="Commercial Construction"
      description="Creating functional and inspiring commercial spaces is essential for business success. At Housekaar, we provide comprehensive commercial construction services for various industries."
    />
    <div className="architectural-services-page">
      <section>
        <h2>Our Commercial Construction Services</h2>
        <ul>
          <li><strong>Office Buildings:</strong> Constructing modern and efficient office spaces.</li>
          <li><strong>Retail Spaces:</strong> Building attractive and functional retail environments.</li>
          <li><strong>Restaurants:</strong> Designing and building unique dining spaces.</li>
          <li><strong>Warehouses:</strong> Constructing durable and spacious storage facilities.</li>
          <li><strong>Tenant Improvements:</strong> Renovating and customizing existing commercial spaces.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Our Commercial Construction</h2>
        <ul>
          <li><strong>Professional Project Management:</strong> Ensuring projects are completed on time and within budget.</li>
          <li><strong>Compliance and Safety:</strong> Adhering to all building codes and safety regulations.</li>
          <li><strong>Customized Solutions:</strong> Tailoring designs and construction to meet specific business needs.</li>
          <li><strong>Efficient Space Utilization:</strong> Maximizing the use of available space for optimal functionality.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Project Planning:</strong> Defining project scope and goals.</li>
          <li><strong>Design and Engineering:</strong> Developing detailed plans and engineering specifications.</li>
          <li><strong>Permitting and Approvals:</strong> Obtaining all necessary permits and approvals.</li>
          <li><strong>Construction:</strong> Executing the construction with experienced professionals.</li>
          <li><strong>Handover and Support:</strong> Delivering the completed project and providing ongoing support.</li>
        </ol>
      </section>

      <section>
        <h2>Get Started</h2>
        <p>
          Contact us today to discuss your commercial construction project. Let us help you create the perfect space for your business.
        </p>
      </section>
    </div>
    </>
  );
};

export default CommercialConstruction;