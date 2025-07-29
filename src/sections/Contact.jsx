export default function Contact() {
  return (
    <section className="boxCont bg-3 co-1 p-3">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you. Reach out to discuss partnerships, demos, or questions:</p>
      <ul>
        <li>Email: <a href="mailto:kokosnamibia@gmail.com">kokosnamibia@gmail.com</a></li>
        <li>Phone: +264 XXX XXX</li>
        <li>Follow us on <a href="https://facebook.com/kokosnamibia" target="_blank" rel="noreferrer">Facebook</a></li>
      </ul>
      <form action="https://formspree.io/f/mwkgrqgv" method="POST" className="p-2">
        <input type="text" name="name" placeholder="Your Name" required className="p-1 m-1" />
        <input type="email" name="email" placeholder="Your Email" required className="p-1 m-1" />
        <textarea name="message" placeholder="Your Message" required className="p-1 m-1" />
        <button type="submit" className="bgBtn coBtn">Send Message</button>
      </form>
    </section>
  );
}