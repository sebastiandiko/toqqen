import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from './assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="menu-placeholder"></div>
        <div className="logo">
          <img src={logo} alt="Logo" />
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
              Home
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
              About Us
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
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
