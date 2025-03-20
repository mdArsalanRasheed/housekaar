import React from 'react';
import './GetQuoteForm.css';

const GetQuoteForm = () => {
  return (
    <div className="get-quote-form-container">
      <h2>Get a Free Quote</h2>
      <div className="google-form-embed">
        <iframe
          src = "https://docs.google.com/forms/d/e/1FAIpQLSfYx8ABG_i7_udYGdG9UXM5qwIW88STqNDN4O06W1rjgIQ3Bw/viewform?embedded=true"
          width="640" // Adjust width as needed
          height="800" // Adjust height as needed
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Get Quote Form"
        >
        </iframe>
      </div>
    </div>
  );
};

export default GetQuoteForm;


import React, { useState } from 'react';
import './GetQuoteForm.css'; // Create GetQuoteForm.css

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectDetails: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or an email service
    console.log('Form data submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      projectDetails: '',
    });
    alert('Thank you for your quote request! We will be in touch soon.');
  };

  return (
    <div className="get-quote-form-container">
      <h2>Get a Free Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="new-construction">New Construction</option>
            <option value="renovation">Renovation</option>
            <option value="extension">Extension</option>
            <option value="custom-build">Custom Build</option>
            <option value="interior-design">Interior Design</option>
            <option value="architectural-design">Architectural Design</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="projectDetails">Project Details</label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default GetQuoteForm;

