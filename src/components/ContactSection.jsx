import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './ContactSection.css';

const ContactSection = () => {
  const { t } = useTranslation();
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
      setSuccessMessage(t('contact.success'));
      e.target.reset();
    }, (error) => {
      console.log(error.text);
      setSuccessMessage(t('contact.error'));
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="background-animation">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
      </div>
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>{t('contact.title')}</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="input-group">
            <input type="text" name="firstName" placeholder={t('contact.firstName')} required />
            <input type="text" name="lastName" placeholder={t('contact.lastName')} required />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder={t('contact.email')} required />
            <input type="text" name="phone" placeholder={t('contact.phone')} />
          </div>
          <textarea name="message" placeholder={t('contact.message')} required></textarea>
          <button type="submit">{t('contact.sendButton')}</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
