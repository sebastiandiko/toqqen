// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import CardsSection from './components/CardSection';
import AboutUs from './components/AboutUs';
import Steps from './components/Steps';
import TechnologiesBanner from './components/TechnologiesBanner';
import WhyUsSection from './components/WhyUsSection';
import ContactSection from './components/ContactSection';
import PoliciesSection from './components/PoliceSection';

function App() {
  // 1. Detectamos el idioma del navegador:
  const userLang = navigator.language || navigator.userLanguage;
  // 2. Si empieza con "es", usamos "es". Si no, "en".
  const defaultLang = userLang.toLowerCase().startsWith('es') ? 'es' : 'en';

  // 3. Iniciamos el estado con el idioma detectado
  const [language, setLanguage] = useState(defaultLang);

  return (
    <div className="App">
      {/* Pasamos el idioma y la función para cambiarlo al Header */}
      <Header language={language} setLanguage={setLanguage} />

      <main>
        <Banner />
        <CardsSection />
        <AboutUs />
        {/* Pasamos el idioma al componente Steps */}
        <Steps language={language} />
        <TechnologiesBanner />
        <WhyUsSection />
        <ContactSection />
        <PoliciesSection />
      </main>
    </div>
  );
}

export default App;
