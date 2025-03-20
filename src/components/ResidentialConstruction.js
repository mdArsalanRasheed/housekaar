import React from 'react';
import './ArchitecturalServices.css'; // Use the same CSS file
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/house_floor.jpg';

const ResidentialConstruction = () => {
    useScrollToTop();
  return (
    <>
       <ReusableLanding
      imageUrl={image2}
      title="Residential Construction"
      description="Building your dream home is a significant milestone. At Housekaar, we specialize in residential construction, delivering high-quality homes that reflect your unique style and needs."
    />
    <div className="architectural-services-page">
      <section>
        <h2>Our Residential Construction Services</h2>
        <ul>
          <li><strong>Custom Home Building:</strong> Designing and constructing bespoke homes tailored to your vision.</li>
          <li><strong>Spec Home Construction:</strong> Building move-in ready homes with modern designs and amenities.</li>
          <li><strong>Home Additions:</strong> Expanding your existing home with new rooms and extensions.</li>
          <li><strong>Garage Construction:</strong> Building detached or attached garages for storage and parking.</li>
          <li><strong>Outdoor Living Spaces:</strong> Creating patios, decks, and outdoor kitchens for enhanced living.</li>
        </ul>
      </section>

      <section>
        <h2>Benefits of Our Residential Construction</h2>
        <ul>
          <li><strong>Quality Craftsmanship:</strong> Ensuring every aspect of construction meets our high standards.</li>
          <li><strong>Personalized Service:</strong> Working closely with you to understand your needs and preferences.</li>
          <li><strong>Timely Completion:</strong> Adhering to project timelines and budgets.</li>
          <li><strong>High-Quality Materials:</strong> Using durable and premium materials for long-lasting homes.</li>
        </ul>
      </section>

      <section>
        <h2>Our Process</h2>
        <ol>
          <li><strong>Initial Consultation:</strong> Discussing your vision and requirements.</li>
          <li><strong>Design and Planning:</strong> Developing detailed plans and obtaining necessary permits.</li>
          <li><strong>Construction:</strong> Executing the construction with skilled professionals.</li>
          <li><strong>Inspections:</strong> Conducting regular inspections to ensure quality and compliance.</li>
          <li><strong>Final Walkthrough:</strong> Reviewing the completed home with you before handover.</li>
        </ol>
      </section>

      <section>
        <h2>Get Started</h2>
        <p>
          Contact us today to discuss your residential construction project. Let us help you build the home of your dreams.
        </p>
      </section>
    </div>
    </>
  );
};

export default ResidentialConstruction;