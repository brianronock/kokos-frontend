// src/sections/Hero.jsx
import { Link } from 'react-router-dom';

export default function Hero({ id }) {
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
    <section id={id} className="hero-section">
      <div className="container">
        <div className="hero-title-cont">
          <h1 className="hero-title">
            Empowering Africa's Learners with <span className="text-accent">AI & Coding</span>
          </h1>
        </div>
        <div className="hero-content">
          <div className="hero-text-col">
            <p className="hero-text">
              Transforming education through innovative AI and coding programs for Grades 1-8, preparing students for the digital future.
            </p>
            <div className="hero-buttons">
              <Link to="/#why" className="btn btn-outline f-1" onClick={() => handleLinkClick('why')}>
                Learn About Us
              </Link>
              <button className="btn primaryBtn f-1">Request a Demo</button>
              <Link to="/#contact" className="btn btn-outline f-1" onClick={() => handleLinkClick('contact')}>
                Contact Us Today
              </Link>
            </div>
          </div>
          <div className="hero-video-col">
            <div className="video-wrapper">
              <div className="video-overlay-text">
                <p>Discover AI Learning in Action</p>
              </div>
              <video controls playsInline controlsList="nodownload" preload="metadata" width="100%" poster="/images/kokosnam_logo.png">
                <source src={`${import.meta.env.BASE_URL}videos/kokos_india-video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}