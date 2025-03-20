import React, { useState } from 'react';
import './GetQuoteForm.css';
import emailjs from '@emailjs/browser'; // Import EmailJS

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

    // EmailJS integration
    emailjs
      .sendForm(
        'service_tq251hq', // Replace with your Service ID
        'template_md1wxmm', // Replace with your Template ID
        e.target, // Use the form element as the parameter
        'ADYRasjhLszJ4pSNJ' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Thank you for your quote request! We will be in touch soon.');
        },
        (error) => {
          console.log(error.text);
          alert('There was an error submitting your request. Please try again.');
        }
      );

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      projectDetails: '',
    });
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