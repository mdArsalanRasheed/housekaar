import React from 'react';
import HeroSection from './HeroSection.js';
import ServicesSection from './ServicesSection.js';
import Testimonials from './Testimonials.js';
import FAQ from './FAQ.js';
import Services from './Services.js';
import './HomePage.css';
import PricingPackages from './PricingPackages.js';
import DesignProcess from './DesignProcess.js';
import useScrollToTop from './useScrollToTop';
import WhyChooseUs from './WhyChooseUs.js';
import GetQuoteForm from './GetQuoteForm.js';
import ProjectGallery from './ProjectGallery';
import image1 from '../img/house_floor.jpg';
import image2 from '../img/interior.jpg';
import image3 from '../img/dream_home.jpg';
import AboutUs from './AboutUs.js';
import Seo from './Seo';

const HomePage = () => {
  useScrollToTop();
  const projectImages = [image1, image2, image3];
    return (
      <div className="home-page">
        <Seo
        title="Construction Consultancy | Project Management & Design"
        description="Expert construction consultancy services. We provide project management, design, and supervision for residential & commercial projects. Contact Housekaar today."
        keywords="construction consultancy, project management, building design, construction supervision, residential construction, commercial construction, Patna, Bihar"
        location="Patna" // Or your relevant location
        imageUrl="/images/home-banner.jpg" // Adjust the path to your image
      />
        <HeroSection />
        <ServicesSection />
        <AboutUs/>
        <Services />
        <WhyChooseUs/>
        <DesignProcess/>
        <ProjectGallery images={projectImages} />
        <PricingPackages/>
        <GetQuoteForm/>
        <Testimonials />
        <FAQ />
      </div>
    );
  };
  
  export default HomePage;