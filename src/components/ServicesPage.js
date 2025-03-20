import React from 'react';
import ServicesSection from './ServicesSection'; // Assuming you have a ServicesSection component
import Services from './Services'; // Assuming you have a Services component
import './ServicesPage.css'; // Create ServicesPage.css for styling
import useScrollToTop from './useScrollToTop';
import FAQ from './FAQ';
import serviceFAQData from './serviceFAQData';
import ReusableLanding from './ReusableLanding';
import image1 from '../img/pexels-expect-best-79873-323780.jpg';
import Advantages from './Advantages';
import { FaCheckCircle, FaUsers, FaRulerCombined, FaLightbulb, FaHome, FaPhoneAlt } from 'react-icons/fa';
import InquiryForm from './InquiryForm';

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

const ServicesPage = () => {
  
  
  useScrollToTop();
  return (
    <div className="services-page">
       <ReusableLanding
      imageUrl={image1}
      title="Personalized Home Design: Craft Your Dream Space"
      description="Transform your vision into reality with our customized house design services. We make designing your dream home easy, fast, and affordable."
    />
      <div className="services-page-content">
        <h1>Our Services</h1>
        <p>
          We offer a comprehensive range of construction and design services to meet your needs.
          Whether you're looking to build a new home, renovate an existing space, or create a stunning commercial building,
          our team of experts is here to help.
        </p>
        <ServicesSection />
        <Services />
        <Advantages advantages={advantagesData} />
        <FAQ faqData={serviceFAQData} /> {/* Pass serviceFAQData as a prop */}
      </div>
      <InquiryForm/>
    </div>
  );
};

export default ServicesPage;