import React from 'react';
import './InteriorDesign.css'; // Create this CSS file
import useScrollToTop from './useScrollToTop';
import image2 from '../img/interior.jpg';
import ReusableLanding from './ReusableLanding';
import FAQ from './FAQ';
import serviceFAQData from './serviceFAQData';
import InquiryForm from './InquiryForm';
import WhyChooseUs from './WhyChooseUs.js';


const HomeInteriorDesign = () => {
    useScrollToTop();
  return (
    <>
     <ReusableLanding
      imageUrl={image2}
      title="Home Interior Design"
      description="Your home should be a reflection of your personal style and a sanctuary where you can relax and unwind. At Housekaar, we specialize in creating bespoke home interior designs that cater to your unique needs and preferences."
    />
    <div className="interior-design-page">
      <section>
        <h2>Living Room Design</h2>
        <p>
          The living room is the heart of your home, and we believe it should be both stylish and comfortable. Our designs focus on creating a harmonious balance between aesthetics and functionality. We consider factors like natural lighting, furniture placement, and color palettes to create a welcoming and inviting space.
        </p>
        <ul>
          <li>Custom furniture design and selection</li>
          <li>Lighting design to enhance ambiance</li>
          <li>Color coordination and material selection</li>
          <li>Space optimization and layout planning</li>
        </ul>
      </section>

      <section>
        <h2>Kitchen and Dining Area</h2>
        <p>
          The kitchen is often the hub of family life, and we design kitchens that are not only beautiful but also highly functional. We pay close attention to workflow, storage solutions, and appliance integration. Our dining area designs create a cohesive and elegant space for family meals and gatherings.
        </p>
        <ul>
          <li>Ergonomic kitchen layouts</li>
          <li>Custom cabinetry and countertop selection</li>
          <li>Dining area furniture and decor</li>
          <li>Integrated appliance planning</li>
        </ul>
      </section>

      <section>
        <h2>Bedroom and Bathroom Retreats</h2>
        <p>
          Your bedroom should be a personal retreat, and we design bedrooms that are both luxurious and comfortable. Our bathroom designs focus on creating spa-like experiences with high-quality fixtures and finishes.
        </p>
        <ul>
          <li>Bedroom furniture and bedding selection</li>
          <li>Custom closet and storage solutions</li>
          <li>Bathroom fixture and tile selection</li>
          <li>Lighting and ventilation planning</li>
        </ul>
      </section>
      <section>
        <h2>Customization and Personalization</h2>
        <p>
          We understand that every home is unique, and we offer a wide range of customization options to ensure that your interior design reflects your personal style. From custom furniture and lighting to unique material selections and finishes, we work closely with you to bring your vision to life.
        </p>
      </section>

    </div>
    <WhyChooseUs/>
    
    <InquiryForm/>
    <FAQ faqData= {serviceFAQData}/>
    
    </>
  );
};

export default HomeInteriorDesign;