import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';
import homeImage from './assets/home.jpg';

const AboutUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.from(".about-text", {
      duration: 1.2,
      x: -50,
      opacity: 0,
      ease: "power3.out"
    });
    gsap.from(".about-image", {
      duration: 1.2,
      x: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.3
    });
  }, []);

  return (
    <section className="about-us">
      <div className="overlay"></div>
      <div className="about-content">
        <div className="about-text">
          <h2>{t('about.title')}</h2>
          <p>{t('about.text')}</p>
        </div>
        <div className="about-image">
          <img src={homeImage} alt={t('about.title')} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
