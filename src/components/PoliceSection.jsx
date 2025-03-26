import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PoliceSection.css';

const PoliciesSection = () => {
  return (
    <section className="policies-section">
      <div className="background-overlay"></div>
      <motion.div 
        className="policies-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Policies</h2>
        <ul className="policies-list">
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/privacy-policy">Privacy Policy</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/cookies-policy">Cookies Policy</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/legal-notice">Legal Notice</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/delivery-policy">Delivery Policy</Link>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default PoliciesSection;
