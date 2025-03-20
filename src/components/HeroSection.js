import React from 'react';
import './HeroSection.css'; // Create HeroSection.css
import exteriorImage from '../img/exterior.jpg'; // Import your images
import houseDesignImage from '../img/pexels-heyho-8143707.jpg';
import floorPlanImage from '../img/pexels-pavel-danilyuk-7937323.jpg';
import customDesignImage from '../img/pexels-aadil-2884867.jpg';
import elevationDesignImage from '../img/pexels-pixabay-221506.jpg';
import interiorDesignImage from '../img/pexels-falling4utah-1080696.jpg';
import vastuConsultancyImage from '../img/pexels-rdne-6806443.jpg';

const HeroSection = () => {
  const cardData = [
    {
      image: houseDesignImage,
      title: 'House Design in Minutes',
      description:
        'Imagine: Within 60 seconds, unlock access to thousands of meticulously crafted house plans, each tailored by our expert architects. Find your dream home, perfectly aligned with your unique taste, instantly.',
    },
    {
      image: floorPlanImage,
      title: 'Floor Plan',
      description:
        '"See your dream home: Expert floor plans make it real." "Perfect space, less stress: Plans fit your life, use every bit." "Build easy: Clear plans for your perfect home."',
    },
    {
      image: customDesignImage,
      title: 'Customized House Design',
      description:
        '"Your vision, our blueprint: Craft a truly unique home, tailored precisely to your lifestyle and desires." "Beyond the ordinary: Experience personalized design that maximizes comfort, functionality, and lasting value." "From concept to creation: We transform your dreams into a bespoke home, reflecting your individuality in every detail."',
    },
    {
      image: elevationDesignImage,
      title: 'House Elevation Design',
      description:
        '"First impressions that last: Elevate your home\'s curb appeal with stunning elevation designs that capture your unique style." "Beyond blueprints: See your home\'s true potential with detailed elevation designs that showcase its beauty from every angle." "Crafting your home\'s face: Our elevation designs blend artistry and architecture, creating a facade you\'ll love for years to come."',
    },
    {
      image: interiorDesignImage,
      title: 'Interior Designing',
      description:
        '"Transform your space, transform your life: Discover interior designs that create harmony, comfort, and a reflection of your unique style." "Beyond beautiful: We craft interiors that are not just visually stunning, but also perfectly functional and tailored to your everyday needs." "Your dream interior, our expertise: From concept to completion, we bring your vision to life, creating spaces you\'ll love to live in."',
    },
    {
      image: vastuConsultancyImage,
      title: 'Vastu Consultancy',
      description:
        '"Harmonize your space, enhance your life: Unlock positive energy and prosperity with expert Vastu guidance tailored to your unique needs." "Beyond design, towards well-being: Create a balanced and thriving environment with Vastu solutions that promote peace and success." "Ancient wisdom, modern living: Transform your home or business with proven Vastu principles, bringing harmony and abundance into your life."',
    },
  ];

  return (
    <div>
      <div className="hero">
        <img src={exteriorImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Top Construction and Interior Design Services in Bihar</h1>
          <p>We are a leading construction company serving clients across Bihar, including Patna, Gaya, and Bhagalpur.</p>
        </div>
      </div>
      <div className="content-main">
        <h1>What we do</h1>
        <div className="card-section">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt="Card" className="card-image" />
              <h3 className="card-header">{card.title}</h3>
              <p className="card-paragraph">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;