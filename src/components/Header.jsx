// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from './assets/logo.png'; // Adjust the path as needed

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link 
              to="inicio" 
              smooth={true} 
              duration={500} 
              offset={-70} // adjust for fixed header if needed
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
