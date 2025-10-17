import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-icon">⚙️</span>
            MechESA
          </h3>
          <p className="footer-description">
            Empowering mechanical engineering students through innovation,
            collaboration, and excellence.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              f
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              𝕏
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              in
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              📷
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-contact">
            <strong>Email:</strong>
            <br />
            <a href="mailto:info@mechesa.com">info@mechesa.com</a>
          </p>
          <p className="footer-contact">
            <strong>Location:</strong>
            <br />
            Engineering Building, Campus
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} MechESA. All rights reserved. | Designed with ⚙️
          for engineers
        </p>
      </div>
    </footer>
  );
}
