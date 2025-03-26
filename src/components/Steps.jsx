// Steps.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // <-- Importa useTranslation
import './Steps.css';

// Imágenes para español
import esStep1 from '../assets/spanish/1.png';
import esStep2 from '../assets/spanish/2.png';
import esStep3 from '../assets/spanish/3.png';
import esStep4 from '../assets/spanish/4.png';
import esStep5 from '../assets/spanish/5.png';

// Imágenes para inglés
import enStep1 from '../assets/english/1.png';
import enStep2 from '../assets/english/2.png';
import enStep3 from '../assets/english/3.png';
import enStep4 from '../assets/english/4.png';
import enStep5 from '../assets/english/5.png';

const Steps = () => {
  const { i18n } = useTranslation();

  // Determina el idioma actual: 'es' o 'en'
  const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

  // Selecciona imágenes según el idioma actual
  let stepsImages = [];
  if (currentLang === 'en') {
    stepsImages = [enStep1, enStep2, enStep3, enStep4, enStep5];
  } else {
    stepsImages = [esStep1, esStep2, esStep3, esStep4, esStep5];
  }

  return (
    <div className="steps-wrapper">
      <div className="steps-container">
        {stepsImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Paso ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
