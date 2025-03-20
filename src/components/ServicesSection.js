import React from 'react';
import './ServicesSection.css';
import checklistImage from '../img/pexels-anete-lusina-4792491.jpg';
import reportImage from '../img/pexels-anete-lusina-4792491.jpg';
import communicationImage from '../img/pexels-anete-lusina-4792491.jpg';
import safetyImage from '../img/pexels-anete-lusina-4792491.jpg';
import materialsImage from '../img/pexels-anete-lusina-4792491.jpg';
import qualityImage from '../img/pexels-anete-lusina-4792491.jpg';
import floorPlansImage from '../img/pexels-anete-lusina-4792491.jpg';
import modelingImage from '../img/pexels-googledeepmind-25626520.jpg';
import renderingImage from '../img/pexels-mo-eid-1268975-8657160.jpg';
import bimImage from '../img/pexels-ivan-samkov-4458202.jpg';
import virtualToursImage from '../img/pexels-jakubzerdzicki-30332467.jpg';
import interiorDesignImage from '../img/pexels-ekaterina-bolovtsova-7307714.jpg';
import { Link } from 'react-router-dom'; // Import Link

const ServicesSection = () => {
  const supervisionData = [
    {
      image: checklistImage,
      title: 'Daily Checklists   &  Inspections',
      description: 'Ensure all tasks are completed, documented, and inspected daily, meticulously logging details of materials, equipment, and work progress consistently.',
      link: '/daily-checklists-inspections', // Updated link
      linkText: 'View Checklists',
    },
    {
      image: reportImage,
      title: 'Progress Reports & Documentation',
      description: 'Track project milestones, identify potential delays, and document all activities. Generate detailed reports for stakeholders.',
      link: '/progress-reports-documentation', // Updated link
      linkText: 'View Reports',
    },
    {
      image: communicationImage,
      title: 'Communication & Collaboration',
      description: 'Facilitate seamless communication between team members, contractors, and clients. Use this hub for sharing updates and addressing concerns.',
      link: '/communication-collaboration', // Updated link
      linkText: 'Communication Hub',
    },
    {
      image: safetyImage,
      title: 'Safety Protocols & Compliance',
      description: 'Enforce strict safety guidelines and ensure compliance with all relevant regulations, meticulously documenting audits and providing comprehensive training for all personnel.',
      link: '/safety-protocols-compliance', // Updated link
      linkText: 'Safety Protocols',
    },
    {
      image: materialsImage,
      title: 'Material Management & Inventory',
      description: 'Track material deliveries, manage inventory, and ensure proper storage. Verify material quality and prevent wastage.',
      link: '/material-management-inventory', // Updated link
      linkText: 'Material Management',
    },
    {
      image: qualityImage,
      title: 'Quality Assurance & Control',
      description: 'Implement quality control procedures to ensure adherence to specifications, meticulously documenting inspections and testing results to verify workmanship and materials rigorously.',
      link: '/quality-assurance-control', // Updated link
      linkText: 'Quality Assurance',
    },
  ];

  const designData = [
    {
      image: floorPlansImage,
      title: '2D Floor Plans & Elevations',
      description: 'Detailed architectural drawings for accurate construction and planning, meticulously crafted to include comprehensive floor plans, elevations, and site plans for precise execution.',
      link: '/two-d-plans-elevations', // Updated link
      linkText: 'View 2D Plans',
    },
    {
      image: modelingImage,
      title: '3D Architectural Modeling',
      description: 'Realistic 3D models for visualizing building designs, interiors, and exteriors. Enhance client presentations and project understanding significantly and effectively.',
      link: '/three-d-architectural-modeling', // Updated link
      linkText: 'Explore 3D Models',
    },
    {
      image: renderingImage,
      title: '3D Rendering & Visualization',
      description: 'High-quality rendered images and animations for showcasing detailed architectural and interior designs. Provides a photorealistic view of the project.',
      link: '/three-d-rendering-visualization', // Updated link
      linkText: 'View Renderings',
    },
    {
      image: bimImage,
      title: 'Building Information Modeling (BIM)',
      description: 'Integrated BIM services for efficient project planning, coordination, and management. Includes 3D modeling, clash detection, and data integration.',
      link: '/building-information-modeling', // Updated link
      linkText: 'Learn About BIM',
    },
    {
      image: virtualToursImage,
      title: 'Virtual Tours & Walkthroughs',
      description: 'Interactive virtual tours for immersive project experiences. Allows clients to explore designs in a realistic environment.',
      link: '/virtual-tours-walkthroughs', // Updated link
      linkText: 'Explore Virtual Tours',
    },
    {
      image: interiorDesignImage,
      title: '3D Interior Design',
      description: 'Detailed 3D models of interior spaces, including furniture, lighting, and finishes. Visualize and refine interior designs before construction.',
      link: '/three-d-interior-design', // Updated link
      linkText: 'View Interior Designs',
    },
  ];

  return (
    <div>
      <div className="site-supervision">
        <h2>Site Supervision & Quality Control</h2>
        <p>Effective site supervision is crucial for project success. This section provides resources for ensuring quality, safety, and adherence to project specifications.</p>
        <div className="supervision-content">
          {supervisionData.map((item, index) => (
            <div className="supervision-item" key={index}>
              <img src={item.image} alt={item.title} className="supervision-image" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.link}>{item.linkText}</Link> {/* Use Link */}
            </div>
          ))}
        </div>
      </div>

      <div className="construction-design">
        <h2>2D & 3D Construction Design Services</h2>
        <p>Visualize your construction projects with our comprehensive 2D and 3D design services. We bring your ideas to life with detailed plans and immersive visualizations.</p>
        <div className="design-content">
          {designData.map((item, index) => (
            <div className="design-item" key={index}>
              <img src={item.image} alt={item.title} className="design-image" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.link}>{item.linkText}</Link> {/* Use Link */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;