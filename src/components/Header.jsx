import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
  <Link to="/" className="logo">MyApp</Link>
      <button
        className={`menu-btn${menuOpen ? " open" : ""}`}
        onClick={handleMenuToggle}
        aria-label="Toggle navigation"
      >
        <span className="menu-icon" />
      </button>
      <nav className={`navbar${menuOpen ? " show" : ""}`}>
        <ul className="nav-links">
          {/* Home button removed, logo is now the home link */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
