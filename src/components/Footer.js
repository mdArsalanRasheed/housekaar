import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6'; // Import X icon from fa6

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/designpage">How it Works</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>House Design</h4>
          <ul>
            <li><Link to="/ready-designs">Ready House Designs</Link></li>
            <li><Link to="/house-plans">Customized House Design</Link></li>
            <li><Link to="/floor-plans">Floor Plan</Link></li>
            <li><Link to="/elevation">Elevation</Link></li>
            <li><Link to="/house-construction">House Construction</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Interior Design</h4>
          <ul>
            <li><Link to="/home-interior">Home Interior Design</Link></li>
            <li><Link to="/office-interior">Office Interior Design</Link></li>
            <li><Link to="/design-ideas">Design Ideas</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
      <h4>Contact Us</h4>
      <p>Phone: <a href="tel:+918517058808">85170 58808</a></p>
      <p>Email: <a href="mailto:help@housewayg.com">help@housewayg.com</a></p>
      <p>
        <div/>
        <div className="footer-section contact-info"></div>
        <h4>Social</h4>
        <a href="instagramLink" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </p>
      <p>
        <a href="facebookLink" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
      </p>
      <p>
        <a href="xLink" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <FaXTwitter />
        </a>
      </p>
      <p>
        <a href="linkedinLink" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </p>
    </div>
    
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Housekaar Construction Company. All Rights Reserved.</p>
     
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>

      </div>
    </footer>
  );
};

export default Footer;