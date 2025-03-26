// src/components/PoliciesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PoliceSection.css';

const PoliciesSection = () => {
  return (
    <section className="policies-section">
      <motion.div 
        className="policies-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Policies</h2>
        <ul className="policies-list">
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/cookies-policy">Cookies Policy</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link to="/legal-notice">Legal Notice</Link>
          </li>
          <li>
            <Link to="/delivery-policy">Delivery Policy</Link>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default PoliciesSection;
