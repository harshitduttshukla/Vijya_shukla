import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header>
      <div className="container nav-wrap">
        <a className="brand" href="/" onClick={closeMenu}>
          <span className="brand-mark">PS</span>
          <span>
            <strong>PREETI</strong>
            <small>SCAFFOLDING</small>
          </span>
        </a>
        <button
          className="menu-btn"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={isOpen ? 'open' : ''}
        >
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/scaffolding-rental-mumbai/" onClick={closeMenu}>Rental</a>
          <a href="/scaffolding-labour-mumbai/" onClick={closeMenu}>Labour</a>
          <a href="/scaffolding-guide/" onClick={closeMenu}>Guides</a>
          <a href="/#areas" onClick={closeMenu}>Areas</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="btn btn-small" href="/#contact" onClick={closeMenu}>
          Get a Scaffolding Quote
        </a>
      </div>
    </header>
  );
}
