import React from 'react';
import './Services.css';
import constructionImage from '../img/resid_construction.jpg';
import { Link } from 'react-router-dom'; // Import Link

const Services = () => {
  const servicesData = [
    {
      title: 'Residential Construction',
      description: [
        'Building beautiful, sustainable homes.',
        'Expert craftsmanship and attention to detail.',
        'Efficient project management from start to finish.',
      ],
      buttonText: 'Know More',
      linkTo: '/residential-construction',
    },
    {
      title: 'Commercial Construction',
      description: [
        'Building state-of-the-art commercial spaces.',
        'High-quality materials and modern design.',
        'Comprehensive project delivery to fit your needs.',
      ],
      buttonText: 'Consult the Expert',
      linkTo: '/commercial-construction',
    },
    {
      title: 'Renovations',
      description: [
        'Transform your space with professional renovations.',
        'Customized designs for modern living.',
        'Quality upgrades to suit your taste and budget.',
        'Let us bring your vision to life',
      ],
      buttonText: 'Know More',
      linkTo: '/renovations',
    },
    {
      title: 'House Construction',
      description: [
        'End-to-end house construction services.',
        'From foundation to finishing touches.',
        'Ensuring your home is built to last.',
      ],
      buttonText: 'Consult the Expert',
      linkTo: '/house-construction',
    },
    {
      title: 'Footing Construction',
      description: [
        'Expert team ensuring solid, stable footings.',
        'Critical foundation work for long-lasting structures.',
        'Precision and quality for every project.',
      ],
      buttonText: 'Know More',
      linkTo: '/footing-construction',
    },
  ];

  return (
    <section className="service-section">
      {servicesData.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={constructionImage} alt={service.title} className="service-image" />
          <div className="service-content">
            <h2>{service.title}</h2>
            <ul>
              {service.description.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
            <Link to={service.linkTo} className="service-link">
              {service.buttonText}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;