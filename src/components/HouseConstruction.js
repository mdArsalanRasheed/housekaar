import React from 'react';
import './HouseDesign.css'; 
import useScrollToTop from './useScrollToTop';// Use the same CSS file
import ReusableLanding from './ReusableLanding'
import image2 from '../img/exterior.jpg'
import GetQuoteForm from './GetQuoteForm';
import ReusableSteps from './ReusableSteps';
import FAQ from './FAQ';
import HouseFAQData from './Housefaqdata';

const HouseConstruction = () => {
    useScrollToTop();
    const stepsData = [
      {
        title: 'Tell us your requirements',
        description: 'Share your requirements for a dream home by submitting the enquiry form or calling our help line number: 75960 58808. We’re always available and happy to hear you out.',
      },
      {
        title: 'Discuss several ideas',
        description: 'Our experts will evaluate your house design requirements, and share several input and ideas with you. Think of it as a brainstorming session to finalize your design requirements.',
      },
      {
        title: 'Drawing and designing',
        description: 'Based on the ideas we discuss together, our experts will start working on your house design project. Within a few days, we will send you the concept drawings for reviews.',
      },
      {
        title: 'Revisions and modifications',
        description: 'We want to give you the design that you fully like and that may require some revisions and modifications in what we create. You can request revisions and changes.',
      },
      {
        title: 'Approval and delivery',
        description: 'Once you are fully satisfied with the design created by our expert architects and 3D house designers, we’ll deliver the designs digitally so that you can start building.',
      },
      {
        title: 'Online support',
        description: 'Our relationship does not end with delivery. We’ll be around and you can write or call us anytime even during the execution if needed.',
      },
      // Add as many steps as needed
    ];
  return (
    <>
    <ReusableLanding
    imageUrl={image2}
    title="House Construction"
    description=" Building your dream home is a significant undertaking. At Housekaar, we provide comprehensive house construction services, ensuring quality, efficiency, and a seamless building process."
  />
    <div className="house-design-page">
      <section>
        <h2>Our Construction Services</h2>
        <ul>
          <li><strong>Project Management:</strong> Overseeing all aspects of construction from start to finish.</li>
          <li><strong>Foundation and Structure:</strong> Building a solid foundation and robust structure.</li>
          <li><strong>Electrical and Plumbing:</strong> Installing efficient and safe electrical and plumbing systems.</li>
          <li><strong>HVAC Systems:</strong> Integrating heating, ventilation, and air conditioning systems.</li>
          <li><strong>Interior and Exterior Finishing:</strong> Completing all interior and exterior finishing work.</li>
          <li><strong>Landscaping:</strong> Designing and implementing beautiful landscaping.</li>
        </ul>
      </section>

      <section>
        <h2>Why Choose Our Construction Services?</h2>
        <ul>
          <li><strong>Experienced Team:</strong> Skilled professionals with years of construction experience.</li>
          <li><strong>Quality Materials:</strong> Using only high-quality materials for durability and longevity.</li>
          <li><strong>Timely Completion:</strong> Adhering to project timelines and budgets.</li>
          <li><strong>Transparent Communication:</strong> Keeping you informed at every stage of construction.</li>
          <li><strong>Attention to Detail:</strong> Ensuring every aspect of construction meets our high standards.</li>
        </ul>
      </section>

      <section>
        <h2>Our Construction Process</h2>
        <ol>
          <li><strong>Initial Consultation:</strong> Discussing your requirements and vision.</li>
          <li><strong>Planning and Design:</strong> Developing detailed plans and designs.</li>
          <li><strong>Permitting and Approvals:</strong> Obtaining all necessary permits and approvals.</li>
          <li><strong>Construction:</strong> Executing the construction according to the plans.</li>
          <li><strong>Inspections:</strong> Conducting regular inspections to ensure quality and compliance.</li>
          <li><strong>Handover:</strong> Delivering your completed home.</li>
        </ol>
      </section>

      <ReusableSteps steps={stepsData} />

      <section>
        <h2>Get Started</h2>
        <p>
          Contact us today to discuss your house construction project and begin the journey of building your dream home.
        </p>
      </section>
      <GetQuoteForm/>
      <FAQ faqData={HouseFAQData} />
    </div>
    </>
  );
};

export default HouseConstruction;