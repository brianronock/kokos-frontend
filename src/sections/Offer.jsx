// src/sections/Offer.jsx
export default function Offer({ id }) {
  return (
    <section id={id} className="offer-section">
      <div className="container">
        <div className="section-header center">
          <h2 className="f-xl f-bold">KOKOS Integrated Learning Platform</h2>
          <p className="f-normal">Everything schools need to implement world-class AI and coding education.</p>
        </div>

        <div className="offer-content">
          <div className="offer-features">
            {[
              { icon: 'code', title: 'AI & Coding Curriculum', text: 'Scratch, Python, and WebXR programming tailored for young learners' },
              { icon: 'cloud', title: 'Cloud-Based Learning', text: 'Interactive platform accessible from any device, anywhere' },
              { icon: 'menu_book', title: 'Integrated Textbooks', text: 'Digital resources aligned with curriculum standards' },
              { icon: 'groups', title: 'Teacher Training & Support', text: 'Comprehensive training programs and ongoing support' },
              { icon: 'computer', title: 'Hardware Packages', text: 'Optional lab setups with flexible financing options' },
            ].map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <div className="feature-text">
                  <h3 className="f-big">{feature.title}</h3>
                  <p className="f-normal">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-card">
            <div className="pricing-content">
              <h3 className="f-big">Simple Pricing</h3>
              <div className="price f-xl f-bold">US $4</div>
              <div className="price-period f-normal">per learner per month</div>
              <ul className="price-features left">
                {[
                  'Full curriculum access',
                  'Teacher training included',
                  '24/7 technical support',
                  'Progress tracking & analytics',
                ].map((item, index) => (
                  <li key={index}>
                    <span className="material-symbols-outlined">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn primaryBtn f-1">Get Started Today</button>
            </div>
          </div>
        </div>

        <div className="resources-section">
          <h3 className="f-big">Download Resources</h3>
          <div className="resources-grid">
            {[
              {
                icon: 'description',
                title: 'Program Brochure',
                text: 'Complete overview of our offerings',
                href: '/files/kokos_namibia-brochure.pdf',
                download: 'KOKOS_AI_Brochure.pdf',
              },
              {
                icon: 'school',
                title: 'Teacher Guide',
                text: 'Implementation guide for educators',
                disabled: true,
              },
              {
                icon: 'assessment',
                title: 'Curriculum Overview',
                text: 'Detailed curriculum breakdown',
                href: '/files/kokos_india-brochure.pdf',
                download: 'KOKOS_AI_Curriculum_Overview.pdf',
              },
            ].map((resource, index) => (
              <div key={index} className="resource-card">
                <div className="resource-icon">
                  <span className="material-symbols-outlined">{resource.icon}</span>
                </div>
                <h4 className="f-big">{resource.title}</h4>
                <p className="f-normal">{resource.text}</p>
                {resource.disabled ? (
                  <button className="btn primaryBtn f-1" disabled>Coming soon...</button>
                ) : (
                  <a href={resource.href} className="btn primaryBtn f-1" target="_blank" rel="noopener" download={resource.download}>
                    Download PDF
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}