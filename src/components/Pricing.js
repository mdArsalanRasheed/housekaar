import React from 'react';
import './Pricing.css'; // Create this CSS file
import useScrollToTop from './useScrollToTop';
import GetQuoteForm from './GetQuoteForm';
import ServiceFeatures from './ServiceFeatures';
import {FaSyncAlt,FaComments,FaCheckCircle} from 'react-icons/fa';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/elvea.jpg';

const Pricing = () => {

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
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="Our Pricing"
      description="We offer a range of pricing options to suit your needs and budget. Our goal is to provide transparent and competitive pricing for all our services."
    />
    <div className="pricing-page">

      <section className="service-pricing">
        <h2>Architectural Design Services</h2>
        <p>
          Our architectural design services are tailored to your specific project requirements. We offer both ready-made and custom design packages.
        </p>

        <section className="pricing-section">
      <h2>Our Pricing</h2>
      <div className="pricing-details">
        <div className="pricing-item">
          <h3>Basic <p><strong>Rs. 7000</strong></p></h3>
          <p>
            The deliverables includes:
            <ul>
              <li>House plan drawings with furniture layout</li>
              <li>3D exterior elevation designs</li>
            </ul>
          </p>
          <div className="pricing-bottom">
            
            <button className="enquire-button">ENQUIRE NOW</button>
          </div>
        </div>

        <div className="pricing-item">
          <h3>Complete <p><strong>Rs. 14,000</strong></p></h3>
          <p>
            The deliverables includes:
            <ul>
              <li>House plan drawings with furniture layout</li>
              <li>3D exterior elevation designs</li>
              <li>Structural drawings</li>
              <li>Working drawings</li>
            </ul>
          </p>
          <div className="pricing-bottom">
            
            <button className="enquire-button">ENQUIRE NOW</button>
          </div>
        </div>

        <div className="pricing-item">
          <h3>Full Set <p><strong>Rs. 21,000</strong></p> </h3> 
          <p>
            The deliverables includes:
            <ul>
              <li>House plan drawings with furniture layout</li>
              <li>3D exterior elevation designs</li>
              <li>Structural drawings</li>
              <li>Working drawings</li>
              <li>Drainage drawings</li>
              <li>Electrical drawings</li>
              <li>Plumbing drawings</li>
              <li>A3 size printed plan set</li>
            </ul>
          </p>
          <div className="pricing-bottom">
            <button className="enquire-button">ENQUIRE NOW</button>
          </div>
        </div>
      </div>
    </section>
      </section>

      <section className="service-pricing">
        <h2>Interior Design Services</h2>
        <p>
          Our interior design services focus on creating beautiful and functional spaces that reflect your personal style.
        </p>

        <div className="pricing-details">
          <div className="pricing-item">
            <h3>Home Interior Design</h3>
            <p>Comprehensive interior design for your entire home.</p>
            <p><strong>Starting from:</strong> $2,500</p>
          </div>

          <div className="pricing-item">
            <h3>Office Interior Design</h3>
            <p>Professional interior design for your office space.</p>
            <p><strong>Starting from:</strong> $3,500</p>
          </div>

          <div className="pricing-item">
            <h3>Design Consultation</h3>
            <p>Expert advice and design ideas for your project.</p>
            <p><strong>Starting from:</strong> $200/hour</p>
          </div>
        </div>
      </section>

      <section className="pricing-packages">
        <h2>Pricing Packages</h2>
        <p>
          We offer bundled packages for comprehensive design and construction projects. These packages provide cost savings and convenience.
        </p>

        <div className="package-details">
          <div className="package-item">
            <h3>Design & Build Package</h3>
            <p>Includes architectural design, interior design, and construction management.</p>
            <p><strong>Starting from:</strong> $10,000</p>
          </div>

          <div className="package-item">
            <h3>Interior Design & Renovation Package</h3>
            <p>Includes interior design and renovation services for a single room or entire home.</p>
            <p><strong>Starting from:</strong> $5,000</p>
          </div>
        </div>
      </section>

      <section className="service-pricing">
        <h2>Construction Services</h2>
        <p>
          We provide full-service construction for residential and commercial projects. Our pricing is based on project scope and materials.
        </p>

        <div className="pricing-details">
          <div className="pricing-item">
            <h3>New Home Construction</h3>
            <p>Building your dream home from the ground up.</p>
            <p><strong>Contact us for a quote.</strong></p>
          </div>

          <div className="pricing-item">
            <h3>Renovation and Remodeling</h3>
            <p>Transforming existing spaces to meet your needs.</p>
            <p><strong>Contact us for a quote.</strong></p>
          </div>
        </div>
      </section>

      <section className="get-quote">
        <p>
          For a personalized quote, please contact us with your project details. We are happy to provide a free consultation and estimate.
        </p>
        <GetQuoteForm/>
      </section>
    </div>
    <ServiceFeatures features={featuresData}/>
    </>
  );
};

export default Pricing;