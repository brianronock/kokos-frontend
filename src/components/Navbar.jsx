// Navbar.jsx (React version of your previous Vue-based responsive menu)
import { useState, useEffect } from "react";

export default function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#why", label: "Why AI Education?" },
    { href: "#offer", label: "What We Offer" },
    { href: "#how", label: "How It Works" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
    { href: "#faq", label: "FAQ" },
  ];

  const handleLinkClick = (href) => {
    const section = document.querySelector(href);
    if (section) {
    //   const yOffset = -80;
    //   const y =
    //     section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    //   window.scrollTo({ top: y, behavior: "smooth" });
      section.scrollIntoView({ behavior: "auto" });
    }
    if (onNavigate) onNavigate(href.replace("#", ""));
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-container">
          <a
            href="#hero"
            className="logo"
            onClick={() => handleLinkClick("#hero")}
          >
            <img
              src="/images/logo11.svg"
              alt="KOKOS Logo"
              className="logo-img"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="mobile-nav">
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="material-symbols-outlined">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>

            {menuOpen && (
              <div
                className="mobile-menu-overlay"
                onClick={(e) =>
                  e.target.classList.contains("mobile-menu-overlay") &&
                  setMenuOpen(false)
                }
              >
                <div className="mobile-menu-items slide-down">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={() => handleLinkClick(link.href)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
