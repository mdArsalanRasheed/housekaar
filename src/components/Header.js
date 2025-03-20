import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={visible ? 'visible' : 'hidden'}>
      <nav className="nav">
        <div className="whatsapp-icon-nav">
          <a href="https://wa.me/9" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} color="#25D366" />
          </a>
        </div>
        <div className="logo">
          <h1>Housekaar</h1>
          <img
            src="your_house_icon.png"
            alt="Housekaar Logo"
            style={{ width: '40px', height: '40px', color: '#2e42a3' }}
          />
        </div>
        <div className="hamburger" onClick={handleToggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul id="nav-list" className={isMenuOpen ? 'active' : ''}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/house-plans">House Plan</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/elevation">Elevation</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;