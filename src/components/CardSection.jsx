import React, { useEffect, useRef } from 'react';
import Particles from "react-tsparticles";
import gsap from 'gsap';
import './CardSection.css';

const cardsData = [
  {
    id: 1,
    title: 'Premium Quality',
    description: 'Our digital solutions, including progressive web applications, websites, and custom technological resources, are crafted with the highest standards using state-of-the-art tools. We deliver optimized, secure, and reliable products that consistently exceed client expectations.'
  },
  {
    id: 2,
    title: 'Continuous Innovation',
    description: 'Always at the cutting edge, we integrate the latest trends and technologies to develop modern and responsive digital solutions. Whether you require a robust PWA, a dynamic website, or other tailored tech resources, our innovative approach ensures you stay ahead in the digital landscape.'
  },
  {
    id: 3,
    title: '24/7 Expert Support',
    description: 'Our dedicated support team is available around the clock to assist you with every aspect of your digital projects. From the initial consultation to post-launch maintenance, we provide personalized and timely support to ensure your digital presence is always performing at its peak.'
  }
];

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
