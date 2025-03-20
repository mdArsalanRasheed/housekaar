import React from 'react';
import './LegalPolicies.css'; // Create this CSS file

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <h1>Privacy Policy</h1>
      <p>
        At Housekaar Construction Company, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
      </p>

      <section>
        <h2>Types of Data Collected</h2>
        <ul>
          <li><strong>Personal Information:</strong> Name, contact details (email, phone number, address).</li>
          <li><strong>IP Addresses:</strong> Information about your device and internet connection.</li>
          <li><strong>Cookies:</strong> Data collected through cookies and similar tracking technologies.</li>
        </ul>
      </section>

      <section>
        <h2>How Data is Used</h2>
        <ul>
          <li><strong>Communication:</strong> Responding to inquiries, providing updates, and sending notifications.</li>
          <li><strong>Marketing:</strong> Sending promotional materials and newsletters (with your consent).</li>
          <li><strong>Analytics:</strong> Analyzing website usage to improve our services.</li>
        </ul>
      </section>

      <section>
        <h2>Data Sharing Practices</h2>
        <ul>
          <li><strong>Third-Party Services:</strong> Sharing data with trusted service providers (e.g., hosting, analytics).</li>
          <li><strong>Legal Obligations:</strong> Complying with legal requirements and responding to lawful requests.</li>
        </ul>
      </section>

      <section>
        <h2>Data Security Measures</h2>
        <p>
          We implement security measures to protect your data from unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section>
        <h2>User Rights</h2>
        <ul>
          <li><strong>Access:</strong> Requesting access to your personal data.</li>
          <li><strong>Correction:</strong> Correcting inaccuracies in your data.</li>
          <li><strong>Deletion:</strong> Requesting the deletion of your data (subject to legal limitations).</li>
        </ul>
      </section>

      <section>
        <h2>Cookie Policy</h2>
        <p>
          Please refer to our Cookie Policy for detailed information about how we use cookies.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>
          For privacy inquiries, please contact us at: [Your Contact Information]
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
