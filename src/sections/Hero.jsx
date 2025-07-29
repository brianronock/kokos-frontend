import '../assets/styles/main.css'

export default function Hero() {
  return (
    <section className="bg-2 boxCont py-20 text-center">
      <h1 className="fs-4xl fw-700 mb-4">
        Empowering Namibia's Learners with AI & Coding
      </h1>
      <p className="fs-md max-w-xl mx-auto mb-6">
        FutureTech's KOKOS Program delivers interactive, AI-powered education for Grades 1–8.
      </p>
      <a href="#contact" className="btn primaryBtn">
        Request a Demo
      </a>
    </section>
  );
}