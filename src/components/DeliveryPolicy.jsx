// src/components/DeliveryPolicy.jsx
import React from 'react';
import './DeliveryPolicy.css';

const DeliveryPolicy = () => {
  return (
    <div className="delivery-policy">
      <div className="policy-container">
        <h1>Delivery Policy</h1>
        <p className="policy-date">Effective Date: January 1, 2025</p>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to toqqen's Delivery Policy. This document outlines the terms and conditions regarding the pricing, deposit requirements, negotiation process, financing options, and delivery arrangements for our products and services.
          </p>
        </section>

        <section className="policy-section">
          <h2>Pricing and Payment Terms</h2>
          <p>
            The final price for our products and services depends on the specific requests of the client and the available time for project execution. To initiate the process, a deposit is required as a commitment fee. The quoted price is fully negotiable during direct contact with the client, ensuring that the final agreement reflects the project’s scope and complexity.
          </p>
          <p>
            We offer flexible financing options and accept various payment methods, including credit/debit cards, bank transfers, and online payment systems. All financing proposals will be discussed in detail with the client to ensure transparency and mutual agreement.
          </p>
        </section>

        <section className="policy-section">
          <h2>Delivery Arrangements</h2>
          <p>
            Delivery of the product is arranged in close coordination with the client. Once the pricing and payment terms are finalized, a delivery schedule is mutually agreed upon. We work hard to ensure that the product is delivered in a timely manner and meets your specific requirements.
          </p>
        </section>

        <section className="policy-section">
          <h2>Negotiation and Customization</h2>
          <p>
            Our pricing is flexible and subject to negotiation. We encourage an open dialogue with our clients to tailor our services according to their unique needs. All proposals—including potential financing methods—will be discussed thoroughly to reach an agreement that works best for both parties.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DeliveryPolicy;
