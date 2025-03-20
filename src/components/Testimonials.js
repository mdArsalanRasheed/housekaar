import React from 'react';
import './Testimonials.css'; // Create Testimonials.css
import anjaliImage from '../img/pexels-rajreetasen-1684724.jpg'; // Import your images
import rohanImage from '../img/pexels-b3stography-913753.jpg';

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        'Working with [Your Company Name] was an absolute pleasure! They transformed our outdated house into a modern, beautiful home that perfectly reflects our style. Their attention to detail and commitment to quality is truly exceptional. From the initial design concepts to the final finishing touches, the entire team was professional, communicative, and incredibly helpful. I highly recommend them to anyone looking to build or renovate their home.',
      clientName: 'Anjali Sharma',
      clientLocation: 'Patna, Bihar',
      clientImage: anjaliImage,
    },
    {
      quote:
        'As a first-time home builder, I was quite nervous about the process. However, [Your Company Name] made it so easy and stress-free. They patiently answered all my questions, guided me through every step, and delivered a stunning home that exceeded my expectations. Their craftsmanship is outstanding, and their team is a joy to work with. I\'m so grateful for their expertise and dedication.',
      clientName: 'Rohan Gupta',
      clientLocation: 'Ranchi, Jharkhand',
      clientImage: rohanImage,
    },
  ];

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      {testimonialsData.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <i className="quote-icon">“</i>
          <p>{testimonial.quote}</p>
          <div className="client">
            <img src={testimonial.clientImage} alt={testimonial.clientName} className="client-image" />
            <div className="client-details">
              <span className="client-name">{testimonial.clientName}</span>
              <span className="client-location">{testimonial.clientLocation}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;