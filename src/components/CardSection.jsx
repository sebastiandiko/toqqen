import React, { useEffect, useRef } from 'react';
import Particles from "react-tsparticles";
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import './CardSection.css';

const particlesOptions = {
  fullScreen: { enable: false },
  background: {
    color: { value: "transparent" }
  },
  particles: {
    number: {
      value: 50,
      density: { enable: true, area: 800 }
    },
    color: {
      value: ["#2ecc40", "#d0e7ff", "#022c43"]
    },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 10,
      random: true
    },
    move: {
      enable: true,
      speed: 1,
      random: true,
      straight: false,
      outModes: { default: "out" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "bubble" },
      resize: true
    },
    modes: {
      bubble: {
        distance: 200,
        size: 30,
        duration: 0.4,
        opacity: 1,
        speed: 3
      }
    }
  },
  detectRetina: true
};

const CardsSection = () => {
  const { t } = useTranslation();

  // Se definen los datos de las tarjetas usando las claves de traducción
  const cardsData = [
    {
      id: 1,
      title: t('cards.premiumQuality.title'),
      description: t('cards.premiumQuality.description')
    },
    {
      id: 2,
      title: t('cards.continuousInnovation.title'),
      description: t('cards.continuousInnovation.description')
    },
    {
      id: 3,
      title: t('cards.expertSupport.title'),
      description: t('cards.expertSupport.description')
    }
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <section className="cards-section">
      <div className="particles-container">
        <Particles id="tsparticles" options={particlesOptions} />
      </div>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div key={card.id} className="card" ref={el => cardsRef.current[index] = el}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
