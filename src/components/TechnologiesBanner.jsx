// src/components/TechnologiesBanner.jsx
import React from 'react';
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

/**
 * Componente TechnologiesBanner:
 * - Utiliza CSS Grid para distribuir cada logo en su propia celda.
 * - Muestra un título "Technologíes" centrado y elegante.
 * - Los logos se muestran grandes, centrados y estáticos.
 * - Al hacer hover sobre cada logo se activa un efecto de sombra verde y un leve escalado.
 */
const TechnologiesBanner = () => {
  return (
    <section className="technologies-banner">
      <h2 className="tech-title">Technologíes</h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-item" key={tech.name}>
            <img src={tech.img} alt={tech.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesBanner;
