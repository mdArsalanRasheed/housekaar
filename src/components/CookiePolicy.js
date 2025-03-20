import React from 'react';
import './LegalPolicies.css';

const CookiePolicy = () => {
  return (
    <div className="policy-page">
      <h1>Cookie Policy</h1>
      <p>
        This Cookie Policy explains how Housekaar Construction Company uses cookies and similar tracking technologies on our website.
      </p>

      <section>
        <h2>Types of Cookies Used</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Necessary for website functionality.</li>
          <li><strong>Analytics Cookies:</strong> Collect data on website usage.</li>
          <li><strong>Marketing Cookies:</strong> Track user activity for targeted advertising.</li>
        </ul>
      </section>

      <section>
        <h2>Purpose of Each Cookie</h2>
        <p>
          [Provide details about the purpose of each type of cookie.]
        </p>
      </section>

      <section>
        <h2>How Users Can Manage or Disable Cookies</h2>
        <p>
          Users can manage or disable cookies through their browser settings.
        </p>
      </section>

      <section>
        <h2>Information About Third-Party Cookies</h2>
        <p>
          [Provide information about third-party cookies used on your website.]
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;