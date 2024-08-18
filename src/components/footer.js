import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Logo and About */}
          <div className="footer-col">
            <h4 className="footer-logo">TheBookShop</h4>
            <p className="footer-about">
              Discover your next great read at TheBookShop. We offer a wide variety of books to satisfy every reader's taste.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
              <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
              <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="footer-col">
            <h4>Newsletter</h4>
            <form className="footer-newsletter">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-colors">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TheBookShop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
