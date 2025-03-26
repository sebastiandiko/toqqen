import React, { useEffect } from 'react';
import gsap from 'gsap';
import './AboutUs.css';
import homeImage from './assets/home.jpg';

const AboutUs = () => {
  useEffect(() => {
    // Animación de entrada: el texto se desliza desde la izquierda y la imagen desde la derecha
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
          <h2>About Us</h2>
          <p>
            At Toqqen, we believe that every challenge is an opportunity in disguise. We harness the power of cutting-edge technology and innovation to deliver the best solutions for the toughest problems. Our mission is to transform digital experiences by creating custom digital solutions—from progressive web applications and dynamic websites to bespoke technological resources—that empower your business to excel in an ever-evolving landscape.
            <br /><br />
            Driven by passion and precision, our team works relentlessly to ensure that every solution not only meets but exceeds expectations. With Toqqen, you're not just getting a service; you're partnering with a company committed to redefining the way you connect with the digital world.
          </p>
        </div>
        <div className="about-image">
          <img src={homeImage} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
