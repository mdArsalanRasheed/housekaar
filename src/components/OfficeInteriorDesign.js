import React from 'react';
import './InteriorDesign.css'; // Use the same CSS file
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/exterior.jpg';
import FAQ from './FAQ';
import serviceFAQData from './serviceFAQData';
import InquiryForm from './InquiryForm';
import WhyChooseUs from './WhyChooseUs.js';

const OfficeInteriorDesign = () => {
    useScrollToTop();
  return (
    <>
     <ReusableLanding
      imageUrl={image2}
      title="Office Interior Design"
      description="A well-designed office space can significantly impact productivity, employee morale, and company image. At Housekaar, we create office interior designs that are both functional and inspiring."
    />
    <div className="interior-design-page">
      <section>
        <h2>Workspaces and Collaboration Areas</h2>
        <p>
          We design workspaces that promote efficiency and collaboration. Our open-plan layouts, ergonomic furniture, and advanced technology integration create a dynamic and productive work environment.
        </p>
        <ul>
          <li>Open-plan and private office layouts</li>
          <li>Ergonomic furniture and workstation design</li>
          <li>Collaboration areas and meeting rooms</li>
          <li>Technology integration and cabling solutions</li>
        </ul>
      </section>

      <section>
        <h2>Reception and Client Areas</h2>
        <p>
          The reception area is the first impression your clients have of your company, and we design spaces that are both welcoming and professional. Our client area designs create a comfortable and impressive environment for meetings and presentations.
        </p>
        <ul>
          <li>Reception desk and seating design</li>
          <li>Client meeting rooms and presentation areas</li>
          <li>Branding and signage integration</li>
          <li>Acoustic and soundproofing solutions</li>
        </ul>
      </section>

      <section>
        <h2>Break Rooms and Amenities</h2>
        <p>
          We understand the importance of employee well-being, and we design break rooms and amenities that provide a relaxing and rejuvenating space for employees. Our designs focus on creating a balance between functionality and comfort.
        </p>
        <ul>
          <li>Kitchenette and dining areas</li>
          <li>Lounge and relaxation spaces</li>
          <li>Recreation and fitness areas</li>
          <li>Storage and organization solutions</li>
        </ul>
      </section>

      <section>
        <h2>Sustainability and Innovation</h2>
        <p>
          We are committed to creating sustainable and innovative office designs that reduce environmental impact and promote employee well-being. From energy-efficient lighting and HVAC systems to eco-friendly materials and finishes, we incorporate sustainable practices into every aspect of our designs.
        </p>
      </section>
    </div>
    <WhyChooseUs/>
    <InquiryForm/>
    <FAQ faqData= {serviceFAQData}/>
    </>
  );
};

export default OfficeInteriorDesign;
