// src/sections/Why.jsx
export default function Why({ id }) {
  const features = [
    {
      icon: 'psychology',
      title: 'Critical Thinking',
      text: 'AI education develops logical reasoning, problem-solving skills, and computational thinking from an early age.',
    },
    {
      icon: 'trending_up',
      title: 'Future Readiness',
      text: "85% of jobs that will exist in 2030 haven't been invented yet. AI literacy ensures students are prepared for tomorrow's careers.",
    },
    {
      icon: 'school',
      title: 'Modern Learning',
      text: 'Interactive, engaging methods that make learning fun while building essential 21st-century skills.',
    },
  ];

  const stats = [
    { number: '50M+', label: 'AI-related jobs by 2025' },
    { number: '90%', label: 'Of companies use AI technology' },
    { number: '75%', label: 'Higher earning potential with AI skills' },
  ];

  return (
    <section id={id} className="why-section">
      <div className="container">
        <div className="section-header center">
          <h2 className="f-xl f-bold">Why AI Education Matters</h2>
          <p className="f-normal">Preparing young minds for a future where AI literacy is as essential as traditional reading and writing.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="f-big">{feature.title}</h3>
              <p className="f-normal">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number f-xl f-bold">{stat.number}</div>
              <div className="stat-label f-normal">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}