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
    <div className="bg-white text-neutral-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Why />
        <How />
        <Offer />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}