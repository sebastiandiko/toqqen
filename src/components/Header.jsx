import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from './assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="menu-placeholder"></div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('es')}>ES</button>
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
