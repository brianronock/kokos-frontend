// src/sections/How.jsx
export default function How({ id }) {
  const timelineItems = [
    {
      step: 1,
      title: 'Request Demo',
      text: "Schedule a personalized demonstration of the KOKOS platform to see how it fits your school's needs.",
      side: 'left',
    },
    {
      step: 2,
      title: 'Sign MoU',
      text: 'Formalize the partnership with a Memorandum of Understanding outlining terms and expectations.',
      side: 'right',
    },
    {
      step: 3,
      title: 'School Subdomain Setup',
      text: 'Get your personalized school portal at schoolname.kokos.ai with customized branding and content.',
      side: 'left',
    },
    {
      step: 4,
      title: 'Training & Onboarding',
      text: 'Comprehensive teacher training and student onboarding to ensure smooth implementation and success.',
      side: 'right',
    },
  ];

  return (
    <section id={id} className="how-section">
      <div className="container">
        <div className="section-header center">
          <h2 className="f-xl f-bold">How It Works</h2>
          <p className="f-normal">Simple steps to bring AI education to your school</p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className={`timeline-content ${item.side}`}>
                <div className="step-number f-1">{item.step}</div>
                <h3 className="f-big">{item.title}</h3>
                <p className="f-normal">{item.text}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}