// src/components/ContactSection.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_sb44f76',        // Your Service ID
      'template_xhlkiph',       // Your Template ID
      e.target,
      'J7P3ibnOF7mgAyJC1'       // Your Public Key
    )
    .then((result) => {
      console.log(result.text);
      setSuccessMessage('Message sent successfully!');
      e.target.reset();
    }, (error) => {
      console.log(error.text);
      setSuccessMessage('There was an error sending your message. Please try again.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Let's Work Together!</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="input-group">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="text" name="phone" placeholder="Phone (Optional)" />
          </div>
          <textarea name="message" placeholder="Enter your message here..." required></textarea>
          <button type="submit">Send Message</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
