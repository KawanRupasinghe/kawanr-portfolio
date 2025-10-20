import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="container section about">
      <h2 className="section__title">About</h2>
      {profile.sectionSubtitles?.about && (
        <p className="muted" style={{ marginTop: 2 }}>{profile.sectionSubtitles.about}</p>
      )}

      <div className="about__leads">
        <p className="about__lead_2">
          I design and build full-stack apps that look good, feel smooth, and are easy to use. From Figma designs to
          Java backends and React frontends, I focus on clear structure, thoughtful design, and a flexible, agile way
          of working. I like turning creative ideas into simple, shippable features—and keeping them maintainable
          with solid tests and tidy DevOps so releases feel routine, not chaotic.
        </p>
        <p className="about__lead_2">
          I’m easy to work with, communicate clearly, and bring a strong work ethic. I enjoy teamwork, reviewing and
          learning from teammates—and I’m genuinely curious, so I pick things up fast. I’m looking to grow in a team
          where I can contribute real value, keep raising the quality bar, and ship products people actually enjoy using.
        </p>
      </div>

      <div className="about__meta">
        <div className="about__meta-item hover-card">
          <div className="about__meta-head">
              <a
                className="about__icon"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location || "")}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Open location in Google Maps"
              >
                <MapPin size={16} />
              </a>
            <span className="about__meta-key">Location</span>
          </div>
            <a
              className="about__link about__meta-val"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location || "")}`}
              target="_blank"
              rel="noreferrer"
            >
              {profile.location}
            </a>
        </div>
        <div className="about__meta-item hover-card">
          <div className="about__meta-head">
              <a className="about__icon" href={`mailto:${profile.email}`} aria-label="Send email">
                <Mail size={16} />
              </a>
            <span className="about__meta-key">Email</span>
          </div>
          <a className="about__link" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="about__meta-item hover-card">
          <div className="about__meta-head">
              <a className="about__icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
                <Github size={16} />
              </a>
            <span className="about__meta-key">GitHub</span>
          </div>
          <a className="about__link" href={profile.github} target="_blank" rel="noreferrer">KawanRupasinghe</a>
        </div>
        <div className="about__meta-item hover-card">
          <div className="about__meta-head">
              <a className="about__icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
                <Linkedin size={16} />
              </a>
            <span className="about__meta-key">LinkedIn</span>
          </div>
          <a className="about__link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a>
        </div>
      </div>
    </section>
  );
}
