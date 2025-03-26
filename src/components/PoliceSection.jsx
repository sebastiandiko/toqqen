import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './PoliceSection.css';

const PoliciesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="policies-section">
      <div className="background-overlay"></div>
      <motion.div 
        className="policies-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>{t('policies.title')}</h2>
        <ul className="policies-list">
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/privacy-policy">{t('policies.privacy')}</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/cookies-policy">{t('policies.cookies')}</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/terms-and-conditions">{t('policies.terms')}</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/legal-notice">{t('policies.legal')}</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/delivery-policy">{t('policies.delivery')}</Link>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default PoliciesSection;
