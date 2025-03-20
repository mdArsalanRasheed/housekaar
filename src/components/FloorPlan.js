import React from 'react';
import './HouseDesign.css';
import useScrollToTop from './useScrollToTop';
import image2 from '../img/houseplan.jpg';
import ReusableLanding from './ReusableLanding'
import { Link} from 'react-router-dom';
import FAQ from './FAQ';
import HouseFAQData from './Housefaqdata'

const FloorPlan = () => {
    useScrollToTop();
  return (
    <>
    <ReusableLanding
    imageUrl={image2}
    title="Floor Plan"
    description="A well-designed floor plan is the foundation of a functional and comfortable home. Explore our range of floor plan services to optimize your living space."
  />
    <div className="house-design-page"> 
     <section>
        <h2>Our Floor Plan Services</h2>
        <ul>
          <li><strong>2D Floor Plans:</strong> Detailed layouts showing room dimensions and arrangements.</li>
          <li><strong>3D Floor Plans:</strong> Realistic visualizations of your home's interior.</li>
          <li><strong>Renovation Floor Plans:</strong> Redesign existing layouts to improve functionality.</li>
          <li><strong>Custom Floor Plans:</strong> Tailored plans to meet your specific requirements.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Professional Floor Plans</h2>
        <ul>
          <li><strong>Improved Space Utilization:</strong> Maximize the use of available space.</li>
          <li><strong>Enhanced Functionality:</strong> Create a smooth flow between rooms.</li>
          <li><strong>Better Visualization:</strong> Understand the layout before construction begins.</li>
          <li><strong>Increased Property Value:</strong> Well-designed floor plans add value to your home.</li>
        </ul>
      </section>

      <section>
        <h2>View Our Portfolio</h2>
        <p>
          Browse our portfolio to see examples of our floor plan designs. Contact us to discuss your project.
        </p>
        <Link to="/projects"><button className='custom-button'>Portfolio</button></Link>
      </section>
      <FAQ faqData={HouseFAQData} />
    </div>
    </>
  );
};

export default FloorPlan;