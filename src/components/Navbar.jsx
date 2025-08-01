import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollLink from './ScrollLink';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Effect to handle body overflow and hash changes
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    // Listen for hash changes to update selected state
    const handleHashChange = () => {
      setMenuOpen(false); // Close menu on hash change
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [menuOpen]);

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'why', label: 'Why AI Education?' },
    { id: 'offer', label: 'What We Offer' },
    { id: 'how', label: 'How It Works' },
    { id: 'team', label: 'Team' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navBar">
      <div className="container">
        <ScrollLink id="hero" className="logo">
          <img
            src={`${import.meta.env.BASE_URL}images/logo11.svg`}
            alt="FutureTech Africa Logo"
            className="logo-img"
          />
        </ScrollLink>
        <div className="desktop-nav">
          {links.map((link) => (
            <ScrollLink
              key={link.id}
              id={link.id}
              className={`nav-link f-1 ${
                location.hash === `#${link.id}` || (link.id === 'hero' && location.hash === '') ? 'selected' : ''
              }`}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
        <div className="mobile-nav">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined" aria-hidden="true">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
          {menuOpen && (
            <div className="mobile-menu-overlay" onClick={(e) => {
              if (e.target.className === 'mobile-menu-overlay') setMenuOpen(false);
            }}>
              <div className="mobile-menu-items">
                {links.map((link) => (
                  <ScrollLink
                    key={link.id}
                    id={link.id}
                    className={`mobile-nav-link f-1 ${
                      location.hash === `#${link.id}` || (link.id === 'hero' && location.hash === '') ? 'selected' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}