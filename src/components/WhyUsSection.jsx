import React from 'react';
import { motion } from 'framer-motion';
import './WhyUsSection.css';

const features = [
  "Continuous Innovation",
  "Personalized Attention",
  "24/7 Expert Support"
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

const WhyUsSection = () => {
  return (
    <section className="why-us">
      <motion.h2 
         className="section-title"
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
      >
         Why Us?
      </motion.h2>
      <motion.div 
         className="cards-row"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
      >
         {features.map((feature, index) => (
          <motion.div
            key={index}
            className="card feature-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(46, 204, 113, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            {feature}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyUsSection;
