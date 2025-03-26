import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import './TechnologiesBanner.css';
import reactLogo from './assets/react.png';
import javaLogo from './assets/javascript.png';
import tsLogo from './assets/typescript.png';
import mysqlLogo from './assets/sql.png';
import pythonLogo from './assets/python.png';
import pwaLogo from './assets/pwa.png';
import angularLogo from './assets/angular.png';

const technologies = [
  { name: 'React', img: reactLogo },
  { name: 'JavaScript', img: javaLogo },
  { name: 'TypeScript', img: tsLogo },
  { name: 'MySQL', img: mysqlLogo },
  { name: 'Python', img: pythonLogo },
  { name: 'PWA', img: pwaLogo },
  { name: 'Angular', img: angularLogo },
];

const TechnologiesBanner = () => {
  const { t } = useTranslation();
  const techItemsRef = useRef([]);
  techItemsRef.current = [];
  
  const addToRefs = (el) => {
    if (el && !techItemsRef.current.includes(el)) {
      techItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(".tech-title", {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power3.out"
    });
    gsap.from(techItemsRef.current, {
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <section className="technologies-banner">
      <h2 className="tech-title">{t('technologies.title')}</h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-item" key={tech.name} ref={addToRefs}>
            <img src={tech.img} alt={tech.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesBanner;
