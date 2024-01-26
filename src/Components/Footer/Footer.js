import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="mailto:nccrtukota@gmail.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
        <div className="created-by">
          Created by: Karan Vaishnav
        </div>
      </div>
    </footer>
  );
};

export default Footer;
