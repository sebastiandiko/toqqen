// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from './assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // En lugar de detectar el idioma, iniciamos "isEnglish" a true
  // para que el switch comience siempre en inglés.
  const [isEnglish, setIsEnglish] = useState(true);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Cambia el idioma y actualiza el estado del toggle
  const handleLanguageToggle = () => {
    if (isEnglish) {
      i18n.changeLanguage('es');
      setIsEnglish(false);
    } else {
      i18n.changeLanguage('en');
      setIsEnglish(true);
    }
  };

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="menu-placeholder"></div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        {/* Toggle Switch para el idioma */}
        <div className="language-switcher">
          <label className="switch">
            <input
              type="checkbox"
              checked={isEnglish}
              onChange={handleLanguageToggle}
            />
            <span className="slider"></span>
          </label>
          <span className="lang-label">{isEnglish ? 'EN' : 'ES'}</span>
        </div>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link
              to="inicio"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              {t('header.home')}
            </Link>
          </li>
          <li>
            <Link
              to="about-us"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              {t('header.aboutUs')}
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              {t('header.contactUs')}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
