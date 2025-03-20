import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Houseplan.css';
import housePlanImage from '../img/houseplan.jpg';
import useScrollToTop from './useScrollToTop';
import FAQ from './FAQ';
import HouseFAQData from './Housefaqdata';
import ReusableLanding from './ReusableLanding';
import image1 from '../img/exterior.jpg';
import ReusableSteps from './ReusableSteps';
import ServiceFeatures from './ServiceFeatures';
import { FaSyncAlt, FaComments } from 'react-icons/fa';
import Advantages from './Advantages';
import {FaCheckCircle,FaUsers, FaRulerCombined, FaLightbulb, FaHome, FaPhoneAlt } from 'react-icons/fa';



const customPlanDetails = [
  {
    title: 'Open Concept Living Area',
    dimensions: '30ft x 25ft',
    features: 'Integrated kitchen, dining, and living spaces, floor-to-ceiling windows',
    description: 'A spacious and bright open concept area perfect for family gatherings and entertaining guests.',
  },
  {
    title: 'Home Office/Study',
    dimensions: '12ft x 10ft',
    features: 'Built-in bookshelves, ergonomic workspace, soundproofing',
    description: 'A dedicated space designed for productivity and focus, ideal for remote work or study.',
  },
  // Add more custom plan details as needed
];

const customizationOptions = [
  {
    title: 'Layout Modifications',
    description: 'Adjust room sizes, add or remove walls, and change the overall layout to better suit your needs.',
  },
  {
    title: 'Exterior Design Customization',
    description: 'Modify the facade, roofing, windows, and doors to reflect your personal style and architectural preferences.',
  },
  {
    title: 'Material and Finish Selection',
    description: 'Choose from a wide range of materials and finishes for both interior and exterior, including flooring, countertops, and paint colors.',
  },
  {
    title: 'Accessibility Enhancements',
    description: 'Incorporate features like ramps, wider doorways, and accessible bathrooms to make your home comfortable for everyone.',
  },
  {
    title: 'Energy Efficiency Upgrades',
    description: 'Integrate sustainable features like solar panels, high-efficiency windows, and advanced insulation to reduce energy consumption.',
  },
  {
    title: 'Smart Home Integration',
    description: 'Add smart home technology for lighting, security, climate control, and entertainment to enhance comfort and convenience.',
  },
  {
    title: 'Adding or Removing Features',
    description: 'Easily add or remove features like fireplaces, balconies, or extra storage spaces to tailor your home to your exact specifications.',
  },
];

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


const advantagesData = [
  {
    icon: <FaCheckCircle />,
    title: 'Customized to perfection',
    description: 'Customized house plan service offers fully personalized and customized house plans and designs.',
  },
  {
    icon: <FaUsers />,
    title: 'Personalized approach',
    description: 'We hear you out, understand your vision, brainstorm with you and create house plan that you’ll love.',
  },
  {
    icon: <FaRulerCombined />,
    title: 'Best use of space',
    description: 'Irrespective of the plot size, our experts are going to do the best space optimization to benefit you.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Expert team',
    description: 'We are backed by a team of expert architects, and structural engineers, designers and support team.',
  },
  {
    icon: <FaHome />,
    title: 'Complete solution',
    description: 'We offer complete architectural and interior designing solution including Vastu consultancy.',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Responsive support',
    description: 'We have a super responsive support team available over the phone and email to help you through.',
  },
];

const featuresData = [
  {
    icon: <FaSyncAlt />,
    text: 'Multiple design revisions',
  },
  {
    icon: <FaComments />,
    text: 'Free consultation with experts',
  },
  {
    icon: <FaCheckCircle />,
    text: '100% satisfaction guarantee',
  },
];

const HousePlanPage = () => {
  useScrollToTop();

  return (
     
      <div className="house-plan-page">
        <ReusableLanding
      imageUrl={image1}
      title="Customized House Design"
      description="Use Housekaar customized house designing services to design your dream home your way - fast, easy and affordably."
    />
        <div className="additional-sections">
        <div className="additional-section">
      <h2 className="section-title">Customized House Plan and 3D Design Service</h2>
      <div className="section-content">
        <p>
          We specialize in creating bespoke house plans and 3D designs tailored to your unique lifestyle and preferences. Our service begins with a thorough consultation to understand your vision, followed by the development of detailed 2D floor plans and immersive 3D visualizations.
        </p>
        <p>
          Our goal is to provide you with a comprehensive understanding of your future home, ensuring every detail aligns with your needs and desires.
        </p>

        <h3 className="subsection-title">2D Floor Plans and Custom Plan Details</h3>
        <p>
          Explore our detailed 2D floor plans, which provide a clear layout of rooms, dimensions, and overall space. Each plan is meticulously crafted to optimize functionality and aesthetics.
        </p>

        <div className="floor-plan-detail">
          <img src={housePlanImage} alt="Detailed Floor Plan Example" />
          <div className="room-details">
            {customPlanDetails.map((room, index) => (
              <div className="room-detail" key={index}>
                <h3>{room.title}</h3>
                <p>Dimensions: {room.dimensions}</p>
                <p>Features: {room.features}</p>
                <p className="room-description">{room.description}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="subsection-title">3D Design and Visualization</h3>
        <p>
          Complementing our 2D plans, our 3D design and visualization services offer a realistic preview of your future home. These services include exterior renderings, interior walkthroughs, and virtual tours, allowing you to experience your home before construction begins.
        </p>
        <p>
          Our 3D visualizations help you make informed decisions about materials, colors, and spatial arrangements, ensuring your dream home is realized exactly as envisioned.
        </p>
      </div>
    </div>

    <div className="additional-section">
      <h2 className="section-title">House Plan Customization Service</h2>
      <div className="section-content">
        <p>
          Our house plan customization service allows you to tailor your chosen design to perfectly match your lifestyle and preferences. We offer a wide range of options to ensure your dream home is exactly as you envision it.
        </p>
        <p>
          Whether you need to adjust room sizes, modify the exterior design, or incorporate energy-efficient features, our team is here to help you create a personalized home that meets all your needs.
        </p>
        <ul style={{ textAlign: 'left' }}>
          {customizationOptions.map((option, index) => (
            <li key={index}>
              <b>{option.title}:</b> {option.description}
            </li>
          ))}
        </ul>
        <p>
            We also provide expert guidance and support throughout the customization process, ensuring a smooth and satisfying experience.
        </p>
      </div>
    </div>

         
          <div className="additional-section">
          <h2 className="section-title">How to design your own dream home the right way?</h2>
          <div className="section-content" style={{ textAlign: 'left' }}>
            <p>
              Designing and building your dream home can be an overwhelming process, right from choosing the building style to deciding on the size of the house, number of floors you want to build, you have to think through everything minutely. But, the feeling of owning a house that you are proud to live and showoff is unparalleled.
            </p>
            <p>
              And if you are up for this amazing and exciting journey of building your own house, and you are wondering about how to design your own dream home the right way, then here’s all you need to get it right.
            </p>

            <h3>Here's a quick three step guide to design your own dream home the right way</h3>

            <h4>Set the objective and expectation right</h4>
            <p>
              Anyone planning to build a house on their own has certain expectation. And the very first thing that you should do when designing your own dream home is to set the objective and expectation right.
            </p>
            <p>
              You may be interested in building a house for living with your family after retirement, or you may simply want to build a house, and then sell it to earn some profit. Different people may have different objective and reasons to build a house.
            </p>
            <p>
              But, whatever is the reason, knowing the main objective will help you through the process of designing your dream home.
            </p>
            <p>
              Once you have figured out the main objective of constructing your own dream home, the next step is to note down the expectations.
            </p>
            <p>
              What are your aspirations and expectation in terms of the final and finished house that you’re planning to design and construct?
            </p>
            <p>
              And, you can figure it out by asking some of these questions to yourself:
            </p>
            <ul>
              <li>Why you are self building this house?</li>
              <li>What's the size and layout of the plot where you want to build your dream home?</li>
              <li>Do you want more open space or more rooms, garage or lift?</li>
              <li>Do you want to build a duplex or a single storey house?</li>
              <li>What kind of architectural building style do you want e.g. modern, contemporary, Victorian, classic or any other style?</li>
              <li>How many floors do you want to construct now or in future?</li>
              <li>Do you need open terrace and a roof top garden?</li>
              <li>What kind of construction budget do you have?</li>
            </ul>
            <p>
              Knowing the about the tentative cost of constructing your dream home can be crucial, because rest of the construction process depends on the budget.
            </p>
            <p>
              The idea is to question and think of every why.
            </p>
            <p>
              Why self build a house when one can easily buy a ready to move property?
            </p>
            <p>
              The more you ask the better.
            </p>
            <p>
              By asking these questions, you will have a clear specification of what you want, how many rooms do you need, what kind of open space will be required and most importantly, this detailed specification will help you get much better result in designing and much accurate estimates for constructing your dream house.
            </p>

            <h4>Brainstorm your vision with expert architect</h4>
            <p>
              Now that you have a clear objective, a vision and a brief of exactly how you want your dream home design to come out, it’s the good time to talk to an architect now.
            </p>
            <p>
              Share your objective, expectation and a detailed home design brief that you prepared in the first step along with other crucial information like plot size, layout, facing, tentative construction budget etc with the house design team.
            </p>
            <p>
              And this is where the custom house design service from houseyog can be used. Our expert team of architect is always willing to hear you out, discuss and understand your requirements and then start designing your house that you will be proud to own.
            </p>
            <p>
              After discussing and understanding your requirements and main objective of designing your own house, they will be able to design the complete house blue print, which may include:
            </p>
            <ul>
              <li>Initial floor plan sketches</li>
              <li>2D floor plan drawing</li>
              <li>3D Building elevation design</li>
            </ul>
            <p>
              Once the most crucial drawings and designs of your dream house is finalized, the architects can design the rest of the drawings that are required by the building contractor for constructing the house.
            </p>
            <p>
              You can work closely with our friendly and professional architect, share your feedback and request revisions and finalize your dream home design.
            </p>
            <p>
              You will be happy to know that our customized house plan and elevation design service includes multiple revisions to ensure your dream home is getting designed exactly the way you wanted it to be.
            </p>

            <h4>Onboard professional building contractor</h4>
            <p>
              Once you have the completely customized house blue print and design available, you are good to take it to the professional building contractor.
            </p>
            <p>
              Share your dream house blue print, elevation design, structural and working drawings with the building contractor and request for construction estimates. There is no problem in taking quotations from a couple of experienced, reliable and professional building contractor near you.
            </p>
            <p>
              Evaluate their credentials, quotations and time line to complete constructing your dream house as per the final design you have created.
            </p>
          </div>
        </div>

          <ReusableSteps steps={stepsData} />
          <Advantages advantages={advantagesData} />

          <FAQ faqData={HouseFAQData} />
          <div className="additional-section">
            <p>
              Wondering how it works?
              <Link to="/designpage">
                <Button>Know about our design process</Button>
              </Link>
            </p>
          </div>
          <ServiceFeatures features={featuresData} />
        </div>
      </div>
    
  );
};

export default HousePlanPage;