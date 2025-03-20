import React, { useState } from 'react';
import './InquiryForm.css';
import emailjs from '@emailjs/browser';

const InquiryForm = () => {
  const [queryType, setQueryType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      queryType: queryType,
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(
        'service_tq251hq', // Replace with your Service ID
        'template_hm3i5nb', // Replace with your Template ID
        templateParams,
        'ADYRasjhLszJ4pSNJ' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Inquiry Submitted! We will be in touch soon.');
          // Reset form fields after successful submission
          setQueryType('');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
          alert('There was an error submitting your inquiry. Please try again.');
        }
      );
  };

  return (
    <div className="inquiry-form-container">
      <h2>Ready to design a house that you’ll be proud to show off?</h2>
      <p>We can help you design your home, office or any other space at extremely reasonable rates.</p>

      <form onSubmit={handleSubmit} className="inquiry-form">
        <div className="form-group">
          <label htmlFor="queryType">Type of query:</label>
          <select
            id="queryType"
            value={queryType}
            onChange={(e) => setQueryType(e.target.value)}
            required
          >
            <option value="">Select a query type</option>
            <option value="housePlan">House plan and design</option>
            <option value="interiorDesign">Interior design</option>
            <option value="otherService">Other service query</option>
            <option value="vendor">Becoming a vendor</option>
            <option value="other">Other query</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default InquiryForm;