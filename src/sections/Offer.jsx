export default function Offer() {
  return (
    <section className="bg-2 boxCont py-16">
      <h2 className="fs-3xl fw-600 text-center mb-8">What We Offer</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="fs-xl fw-700 mb-2">AI & Coding Curriculum</h3>
          <p className="fs-base">
            Our curriculum includes Scratch, Python, and WebXR modules, tailored for Grades 1–8.
          </p>
        </div>
        <div>
          <h3 className="fs-xl fw-700 mb-2">Interactive Platform</h3>
          <p className="fs-base">
            Students learn in the cloud with simulations, quizzes, and gamified lessons that adapt to their level.
          </p>
        </div>
        <div>
          <h3 className="fs-xl fw-700 mb-2">Teacher Support</h3>
          <p className="fs-base">
            We train teachers with easy-to-use tools and lesson plans so they can lead confidently.
          </p>
        </div>
        <div>
          <h3 className="fs-xl fw-700 mb-2">Affordable Access</h3>
          <p className="fs-base">
            Only $4/learner/month with hardware packages available for labs and schools needing devices.
          </p>
        </div>
      </div>
    </section>
  );
}