import React from 'react';
import './ProjectsPage.css';
import ModernFamilyHome from './ModernHome';
import CommercialOfficeBuilding from "./CommercialOfficeBuilding";
import RenovatedHistoricalHouse from "./RenovatedHistoricalHouse";
import LuxuryApartmentComplex from "./LuxuryApartmentComplex";
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image1 from '../img/exterior.jpg';
import ProjectGallery from './ProjectGallery';
import image2 from '../img/interior.jpg';
import image3 from '../img/dream_home.jpg';
import GetQuoteForm from './GetQuoteForm.js';
import Testimonials from './Testimonials.js';
import WhyChooseUs from './WhyChooseUs.js';

const ProjectsPage = () => {
  const projectImages = [image1, image2, image3];
  useScrollToTop();
  const projects = [
    {
      id: 1,
      component: <ModernFamilyHome />,
    },
    {
      id: 2,
      component: <CommercialOfficeBuilding />,
    },
    {
      id: 3,
      component: <RenovatedHistoricalHouse />,
    },
    {
      id: 4,
      component: <LuxuryApartmentComplex />,
    },
  ];

  return (
    <div className="projects-page">
       <ReusableLanding
      imageUrl={image2}
      title="Our Design Portfolio: See Your Dream Home Come to Life"
      description="Explore a diverse range of customized house designs we've created, showcasing our expertise and commitment to personalized homes."
    />
      <h1>Our Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="expanded-project-content">{project.component}</div>
          </div>
        ))}
      </div>
      <ProjectGallery images={projectImages} />
      <GetQuoteForm/>
      <Testimonials />
      <WhyChooseUs/>
    </div>
  );
};

export default ProjectsPage;