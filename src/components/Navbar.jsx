// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const links = [
    { href: "/#hero", id: "hero", label: "Home" },
    { href: "/#why", id: "why", label: "Why AI Education?" },
    { href: "/#offer", id: "offer", label: "What We Offer" },
    { href: "/#how", id: "how", label: "How It Works" },
    { href: "/#team", id: "team", label: "Team" },
    { href: "/#faq", id: "faq", label: "FAQ" },
    { href: "/#contact", id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (href, id) => {
    const section = document.getElementById(id);
    if (section) {
      //   const yOffset = -120;
      const navbarHeight =
        document.querySelector(".navBar")?.offsetHeight || 80;
      const yOffset = -navbarHeight;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "auto" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navBar">
      <div className="container">
        <Link
          to="/#hero"
          className="logo"
          onClick={() => handleLinkClick("/#hero", "hero")}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logo11.svg`}
            alt="FutureTech Africa Logo"
            className="logo-img"
          />
        </Link>
        <div className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link f-1 ${
                location.hash === `#${link.id}` ||
                (link.id === "hero" && location.hash === "")
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleLinkClick(link.href, link.id)}
            >
              {link.label}
            </Link>
          ))}
        </div>
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
              onClick={() => setMenuOpen(false)}
            >
              <div className="mobile-menu-items">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`mobile-nav-link f-1 ${
                      location.hash === `#${link.id}` ||
                      (link.id === "hero" && location.hash === "")
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleLinkClick(link.href, link.id)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
