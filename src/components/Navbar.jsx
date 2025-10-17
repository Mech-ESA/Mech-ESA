import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">⚙️</span>
          MechESA
        </Link>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/events" className="nav-link" onClick={closeMenu}>
            Events
          </Link>
          <Link to="/gallery" className="nav-link" onClick={closeMenu}>
            Gallery
          </Link>
          <Link to="/team" className="nav-link" onClick={closeMenu}>
            Team
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/contact" className="nav-link nav-cta" onClick={closeMenu}>
            Join Us
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
}
