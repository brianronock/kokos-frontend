// src/sections/Team.jsx
export default function Team({ id }) {
  const teamMembers = [
    {
      name: 'Prof. Rhoda Birech',
      role: 'Visionary Leader',
      bio: 'A professor, researcher, and trailblazer in education, Prof. Rhoda Birech leads our team with deep expertise in academic innovation and curriculum design. With decades of experience in empowering learners and mentoring educators, she envisions a future where every child in Africa can thrive through AI, coding, and next-generation digital skills.',
      photo: '/images/prof-rhoda3.png',
    },
    {
      name: 'Brian',
      role: 'Tech Specialist',
      bio: 'A full-stack developer with deep expertise in modern web technologies, Brian ensures that our platform runs smoothly, remains secure, and provides an intuitive experience for both students and educators. His commitment to scalable and efficient code helps bring our AI education vision to life.',
      photo: '/images/brian.png',
    },
    {
      name: 'Theresa',
      role: 'Coordination & Marketing Lead',
      bio: 'Theresa brings structure and heart to our mission. She leads outreach and communication efforts while keeping operations running smoothly behind the scenes.',
      photo: '/images/theresa2.png',
    },
    {
      name: 'Shalom',
      role: 'AI & Coding Enthusiast',
      bio: 'Shalom brings a unique blend of technical curiosity and creative energy to the team. With a growing passion for AI, coding, and digital education, she supports our mission to make advanced technology accessible and exciting for young learners across the continent.',
      photo: '/images/shalom2.png',
    },
    {
      name: 'Alvan',
      role: 'Cybersecurity Expert',
      bio: 'Alvan plays a key role in ensuring the safety and resilience of our digital infrastructure. With a strong foundation in cybersecurity, he helps protect our platform, users, and data, enabling schools to embrace technology with confidence.',
      photo: '/images/alvan2.png',
    },
    {
      name: 'Nehemiah',
      role: 'Financial Coordinator',
      bio: 'Nehemiah ensures our initiative remains financially sustainable and accountable. With a keen eye for detail and a strategic mindset, he manages budgets, streamlines funding processes, and supports long-term growth planning.',
      photo: '/images/nehemiah.png',
    },
    {
      name: 'Moses',
      role: 'Data Analyst',
      bio: 'Moses transforms raw data into meaningful insights that guide our strategy and impact. His analytical skills help us measure progress and make informed decisions.',
      photo: '/images/moses.png',
    },
    {
      name: 'Asahel',
      role: 'Technology Integration Specialist',
      bio: 'Asahel bridges the gap between tech and teaching. He ensures that our tools work seamlessly in real classrooms, empowering educators and learners alike.',
      photo: '/images/asahel.png',
    },
  ];

  return (
    <section id={id} className="team-section">
      <div className="container">
        <div className="section-header center">
          <h2 className="f-xl f-bold">Meet Our Team</h2>
          <p className="f-normal">Local expertise and international collaboration driving educational innovation in Africa.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.photo} alt={member.name} className="member-photo" />
              <h3 className="f-big">{member.name}</h3>
              <p className="member-role f-1">{member.role}</p>
              <p className="member-bio f-normal">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}