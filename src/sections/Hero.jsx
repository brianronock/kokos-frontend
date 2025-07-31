import ScrollLink from '../components/ScrollLink';
import CustomVideoPlayer from '../components/CustomVideoPlayer';

export default function Hero({ id }) {
  return (
    <section id={id} className="hero-section">
      <div className="container">
        <div className="hero-title-cont">
          <h1 className="hero-title">
            Empowering Africa's Learners with <span className="text-accent">AI & Coding</span>
          </h1>
        </div>
        <div className="hero-content">
          <div className="hero-text-col">
            <p className="hero-text f-2">
              Transforming education through innovative AI and coding programs for Grades 1-8, preparing students for the digital future.
            </p>
            <div className="hero-buttons">
              <ScrollLink id="why" className="btn btn-outline f-1">
                Learn About Us
              </ScrollLink>
              <button className="btn primaryBtn f-1">Request a Demo</button>
              <ScrollLink id="contact" className="btn btn-outline f-1">
                Contact Us Today
              </ScrollLink>
            </div>
          </div>
          <div className="hero-video-col">
            <CustomVideoPlayer
              videoSrc={`${import.meta.env.BASE_URL}videos/kokos_india-video.mp4`}
              poster={`${import.meta.env.BASE_URL}images/kokosnam_logo.png`}
              defaultMuted={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}