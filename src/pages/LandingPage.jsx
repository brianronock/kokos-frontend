// src/pages/LandingPage.jsx
import Hero from '../sections/Hero';
import Why from '../sections/Why';
import How from '../sections/How';
import Offer from '../sections/Offer';
import Team from '../sections/Team';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="bg-t">
      <Navbar />
      <main>
        <Hero id="hero"/>
        <Why id="why" />
        <How id="how" />
        <Offer id="offer" />
        <Team id="team" />
        <FAQ id="faq" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}