// src/components/Footer.jsx
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const links = [
    { href: '/#why', id: 'why', label: 'Why AI?' },
    { href: '/#how', id: 'how', label: 'How It Works' },
    { href: '/#contact', id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector('.navBar')?.offsetHeight || 80;
      const yOffset = -navbarHeight;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="boxCont footer p-20">
      <div className="w-max-800 center" style={{ gap: 'var(--gap)' }}>
        <div className="w-33">
          <h3 className="f-big f-bold">FutureTech Africa</h3>
          <p className="f-normal">Empowering the next generation through AI and coding education.</p>
        </div>
        <div className="w-33">
          <h3 className="f-big f-bold">Links</h3>
          <ul className="f-normal left">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`footer-link f-1 ${location.hash === `#${link.id}` ? 'selected' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-33 left">
          <h3 className="f-big f-bold">Contact</h3>
          <p className="f-normal">
            Email: <a href="mailto:kokosnamibia@gmail.com" className="f-1">kokosnamibia@gmail.com</a><br />
            Phone: +264 XXX XXX
          </p>
        </div>
      </div>
      <p className="f-small center mt-20">© {new Date().getFullYear()} FutureTech Africa. All rights reserved.</p>
    </footer>
  );
}