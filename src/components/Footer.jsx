import React from 'react';
import '../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            We provide high-quality jewellery repair services with excellent customer support.
            Our mission is to restore the brilliance of your precious ornaments.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            {/* <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/faq">FAQ</a></li> */}
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>About</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <p className="footer-text">📍 123 Gold Street, Nanded, Maharashtra</p>
          <p className="footer-text">📞 +91 9876543210</p>
          <p className="footer-text">✉️ support@jewelleryrepair.com</p>
        </div>

        {/* Social Icons */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Jewellery Repair Services. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
