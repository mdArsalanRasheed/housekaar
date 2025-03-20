import React from 'react';
import './LegalPolicies.css';

const TermsOfService = () => {
  return (
    <div className="policy-page">
      <h1>Terms of Service</h1>
      <p>
        Welcome to Housekaar Construction Company. By using our website and services, you agree to comply with the following terms and conditions.
      </p>

      <section>
        <h2>User Responsibilities</h2>
        <p>
          Users must provide accurate information and use our services responsibly.
        </p>
      </section>

      <section>
        <h2>Intellectual Property Rights</h2>
        <p>
          All content on this website is the property of Housekaar Construction Company and is protected by intellectual property laws.
        </p>
      </section>

      <section>
        <h2>Limitations of Liability</h2>
        <p>
          Housekaar Construction Company is not liable for any damages arising from the use of our website or services.
        </p>
      </section>

      <section>
        <h2>Payment Terms (If Applicable)</h2>
        <p>
          [Include payment terms if you offer online transactions.]
        </p>
      </section>

      <section>
        <h2>Dispute Resolution</h2>
        <p>
          Any disputes arising from the use of our website or services will be resolved through [Dispute Resolution Method].
        </p>
      </section>

      <section>
        <h2>Termination of Services</h2>
        <p>
          We reserve the right to terminate services for users who violate these terms.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of [Your Jurisdiction].
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;