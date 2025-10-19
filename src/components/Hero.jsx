import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="container hero fade-in">
      <div className="hero__text">
        <p className="eyebrow">Hello, I’m</p>
        <h1 className="gradient-title">{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="blurb">{profile.blurb}</p>
        <div className="cta">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn outline" href="#contact">Contact Me</a>
        </div>
      </div>

      {/* Your photo (place the image at /public/me.jpg) */}
      <div className="hero__photo-wrap rise">
        <img
          src="/me.png"
          alt="Portrait of Kawan Rupasinghe"
          className="hero__photo"
          loading="eager"
          decoding="sync"
        />
      </div>
    </section>
  );
}
