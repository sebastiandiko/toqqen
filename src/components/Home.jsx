// src/pages/Home.jsx
import React from 'react';
import Banner from '../components/Banner';
import CardsSection from '../components/CardSection';
import AboutUs from '../components/AboutUs';
import TechnologiesBanner from '../components/TechnologiesBanner';
import WhyUsSection from '../components/WhyUsSection';
import ContactSection from '../components/ContactSection';
import PoliciesSection from '../components/PoliceSection';

const Home = () => {
  return (
    <main>
      <section id="inicio">
        <Banner />
      </section>
      <section id="cards">
        <CardsSection />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="technologies">
        <TechnologiesBanner />
      </section>
      <section id="why-us">
        <WhyUsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="policies">
        <PoliciesSection />
      </section>
    </main>
  );
};

export default Home;
