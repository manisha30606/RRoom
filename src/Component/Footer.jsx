import React from 'react';
import './FooterStyle.css'; 
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div>
          <h3 className="footer-heading">RRoom</h3>
          <p className="footer-text">
            We are dedicated to delivering the best experiences to our customers.
            Providing quality, reliability, and support.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li className="footer-item">Home</li>
            <li className="footer-item">Services</li>
            <li className="footer-item">About Us</li>
            <li className="footer-item">Contact Us</li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-contact">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">Email: info@company.com</p>
          <p className="footer-text">Phone: +1 234 567 890</p>
          <div className="footer-socials">
            <span><FaFacebookF/></span>
            <span><FaInstagram/></span>
            <span><TbBrandTwitter/></span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>&copy; 2024 CompanyName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
