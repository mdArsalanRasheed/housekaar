import React from 'react';
import './HouseDesign.css';
import useScrollToTop from './useScrollToTop'; // Create this CSS file
import ReusableLanding from './ReusableLanding';
import image2 from '../img/interior.jpg';
import DesignGallery from './PreGallery';
import GetQuoteForm from  './GetQuoteForm'
import FAQ from './FAQ';
import serviceFAQData from './serviceFAQData';


const ReadyHouseDesigns = () => {
    useScrollToTop();
    const myDesigns = [
      {
        title: 'Modern Villa Design',
        description: 'A contemporary villa with spacious interiors...',
        layout: '50 X 80 sqft',
        builtArea: '4000 sqft',
        image: './villa1.jpg',
      },
      {
        title: 'Cozy Family Home',
        description: 'A comfortable family home with a garden...',
        layout: '35 X 60 sqft',
        builtArea: '2100 sqft',
        image: './home1.jpg',
      },
      {
        title: 'Modern Villa Design',
        description: 'A contemporary villa with spacious interiors...',
        layout: '50 X 80 sqft',
        builtArea: '4000 sqft',
        image: './villa1.jpg',
      },
      {
        title: 'Cozy Family Home',
        description: 'A comfortable family home with a garden...',
        layout: '35 X 60 sqft',
        builtArea: '2100 sqft',
        image: './home1.jpg',
      },
      {
        title: 'Modern Villa Design',
        description: 'A contemporary villa with spacious interiors...',
        layout: '50 X 80 sqft',
        builtArea: '4000 sqft',
        image: './villa1.jpg',
      },
      {
        title: 'Cozy Family Home',
        description: 'A comfortable family home with a garden...',
        layout: '35 X 60 sqft',
        builtArea: '2100 sqft',
        image: './home1.jpg',
      },
      {
        title: 'Modern Villa Design',
        description: 'A contemporary villa with spacious interiors...',
        layout: '50 X 80 sqft',
        builtArea: '4000 sqft',
        image: './villa1.jpg',
      },
      {
        title: 'Cozy Family Home',
        description: 'A comfortable family home with a garden...',
        layout: '35 X 60 sqft',
        builtArea: '2100 sqft',
        image: './home1.jpg',
      },
      {
        title: 'Modern Villa Design',
        description: 'A contemporary villa with spacious interiors...',
        layout: '50 X 80 sqft',
        builtArea: '4000 sqft',
        image: './villa1.jpg',
      },
      {
        title: 'Cozy Family Home',
        description: 'A comfortable family home with a garden...',
        layout: '35 X 60 sqft',
        builtArea: '2100 sqft',
        image: './home1.jpg',
      },
      {
        title: 'Modern Villa Design',
        description: 'A contemporary villa with spacious interiors...',
        layout: '50 X 80 sqft',
        builtArea: '4000 sqft',
        image: './villa1.jpg',
      },
      {
        title: 'Cozy Family Home',
        description: 'A comfortable family home with a garden...',
        layout: '35 X 60 sqft',
        builtArea: '2100 sqft',
        image: './home1.jpg',
      },
      {
        title: 'Modern Villa Design',
        description: 'A contemporary villa with spacious interiors...',
        layout: '50 X 80 sqft',
        builtArea: '4000 sqft',
        image: './villa1.jpg',
      },
      {
        title: 'Cozy Family Home',
        description: 'A comfortable family home with a garden...',
        layout: '35 X 60 sqft',
        builtArea: '2100 sqft',
        image: './home1.jpg',
      },
      // ... more design objects ...
    ];
  return (
    <>
     <ReusableLanding
      imageUrl={image2}
      title="Ready House Designs"
      description="Explore our collection of pre-designed house plans, crafted by experienced architects and designers. These ready-to-build designs offer a perfect blend of style, functionality, and affordability."
    />
    <div className="house-design-page">
      <section>
        <h2>Benefits of Ready House Designs</h2>
        <ul>
          <li><strong>Cost-Effective:</strong> Save on design fees and time.</li>
          <li><strong>Quick Start:</strong> Begin construction immediately with pre-approved plans.</li>
          <li><strong>Proven Designs:</strong> Benefit from designs that have been tested and refined.</li>
          <li><strong>Variety of Styles:</strong> Choose from modern, traditional, and contemporary styles.</li>
        </ul>
      </section>
      <h2>Our Featured Designs</h2>
      <DesignGallery designs={myDesigns} />

      <section>
        <h2>How to Purchase</h2>
        <p>
          Browse our catalog, select your preferred design, and contact us to purchase the plans. We offer customization options to tailor the design to your specific needs.
        </p>
      </section>
      <GetQuoteForm/>
      <FAQ faqData= {serviceFAQData}/>
    </div>
    </>
  );
};

export default ReadyHouseDesigns;