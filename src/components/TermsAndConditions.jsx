// src/components/TermsAndConditions.jsx
import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-conditions">
      <div className="policy-container">
        <h1>Terms &amp; Conditions</h1>
        <p className="policy-date">Effective Date: January 1, 2025</p>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to toqqen. These Terms &amp; Conditions govern your use of our website and services. By accessing or using our site, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website.
          </p>
        </section>

        <section className="policy-section">
          <h2>Acceptance of Terms</h2>
          <p>
            By using our website, you represent that you have read, understood, and agree to be bound by these Terms &amp; Conditions, as well as any additional terms and conditions that may apply.
          </p>
        </section>

        <section className="policy-section">
          <h2>Modifications to the Terms</h2>
          <p>
            We reserve the right to update or modify these Terms &amp; Conditions at any time without prior notice. Changes will be posted on this page and become effective immediately upon posting. It is your responsibility to review this page periodically for any updates.
          </p>
        </section>

        <section className="policy-section">
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of [Your Company Name] or its licensors and is protected by applicable intellectual property laws. You may not use, reproduce, or distribute any part of this content without our prior written consent.
          </p>
        </section>

        <section className="policy-section">
          <h2>User Responsibilities</h2>
          <p>
            You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of or restrict the use and enjoyment of the website by any third party. You are solely responsible for any content you submit or transmit through our website.
          </p>
        </section>

        <section className="policy-section">
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall toqqen be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or services. Our total liability shall not exceed the amount paid by you, if any, for accessing our website.
          </p>
        </section>

        <section className="policy-section">
          <h2>Governing Law</h2>
          <p>
            These Terms &amp; Conditions are governed by and construed in accordance with the laws of Argentina. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Corrientes.
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsAndConditions;
