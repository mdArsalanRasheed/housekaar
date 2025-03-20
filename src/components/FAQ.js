import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqData = [
    {
      question: 'What types of house building services do you offer?',
      answer:
        'We handle all aspects of house building, from initial design and planning to construction and finishing touches. This includes new home construction, renovations, extensions, and custom builds. We work closely with you to bring your vision to life.',
    },
    {
      question: 'Do you handle site excavation and preparation?',
      answer:
        'Yes, site excavation and preparation are among our core services. We have the equipment and expertise to prepare your land for construction, including clearing, grading, excavation, and foundation work.',
    },
    {
      question: 'What architectural services do you provide?',
      answer:
        'Our architectural services encompass a range of design solutions, including conceptual design, schematic design, design development, and construction documentation. We create innovative and functional designs tailored to your specific needs and preferences.',
    },
    {
      question: 'What about interior design services?',
      answer:
        'Our interior design services cover space planning, furniture selection, color consultations, material selection, lighting design, and overall aesthetic development. We aim to create beautiful and comfortable living spaces that reflect your personal style.',
    },
    {
      question: 'How much does it cost to build a house?',
      answer:
        'The cost of building a house varies significantly depending on several factors, including the size of the house, location, materials used, and the complexity of the design. We provide detailed cost estimates after discussing your project requirements. Contact us for a personalized consultation.',
    },
    {
      question: 'What is your process for starting a project?',
      answer:
        'Our process typically begins with an initial consultation where we discuss your project goals, budget, and timeline. We then develop a proposal outlining the scope of work and associated costs. Upon your approval, we move into the design phase, followed by construction and project completion.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes, we are fully licensed and insured. We adhere to all industry standards and regulations to ensure the safety and quality of our work.',
    },
    {
      question: 'How can I get in touch with you for a consultation?',
      answer:
        'You can reach us by phone at [Your Phone Number], email us at [Your Email Address], or fill out the contact form on our website at [Your Website Address]. We look forward to hearing from you!',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className={`arrow ${openIndex === index ? 'open' : ''}`}>
              {openIndex === index ? '▲' : '▼'}
            </span>
          </div>
          <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;