// src/sections/FAQ.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ({ id }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What age groups is your curriculum designed for?',
      answer: 'Our AI and coding curriculum is specially designed for learners in Grades 1-8, with age-appropriate content and activities that grow in complexity as students advance.',
    },
    {
      question: 'Do teachers need prior coding experience?',
      answer: 'No prior coding experience is required. Our comprehensive training program prepares teachers of all backgrounds to effectively deliver the curriculum with confidence.',
    },
    {
      question: 'What hardware requirements are needed?',
      answer: 'Our platform works on standard computers, tablets, and even smartphones. We offer flexible hardware packages if your school needs additional equipment.',
    },
    {
      question: 'How is the program integrated into existing curricula?',
      answer: "Our curriculum is designed to complement Namibia's educational standards and can be implemented either as a standalone subject or integrated within existing subjects like mathematics and science.",
    },
    {
      question: 'What ongoing support do you provide?',
      answer: 'We provide continuous technical support, regular curriculum updates, and professional development opportunities for teachers throughout the partnership.',
    },
    {
      question: 'How do you measure program success?',
      answer: 'We provide comprehensive analytics and assessment tools to track student progress, engagement, and skill development, with regular reports for administrators and teachers.',
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLinkClick = () => {
    const section = document.getElementById('contact');
    if (section) {
      const navbarHeight = document.querySelector('.navBar')?.offsetHeight || 80;
      const yOffset = -navbarHeight;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="faq-section">
      <div className="container">
        <div className="section-header center">
          <h2 className="f-xl f-bold">Frequently Asked Questions</h2>
          <p className="f-normal">Find answers to common questions about our AI education programs</p>
        </div>

        <div className="faq-grid">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question f-1" onClick={() => toggleItem(index)}>
                {item.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer f-normal ${openIndex === index ? 'active' : ''}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta center">
          <p className="f-normal">Still have questions? We're here to help!</p>
          <Link to="/#contact" className="btn primaryBtn f-1" onClick={handleLinkClick}>
            <span className="material-symbols-outlined">contact_support</span>
            Contact Our Support Team
          </Link>
        </div>
      </div>
    </section>
  );
}