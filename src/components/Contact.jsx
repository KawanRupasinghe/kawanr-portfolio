import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="container section">
      <h2 className="section__title">Contact</h2>
      <p>Open to internships and collabs. Say hi!</p>
      <div className="cta">
        <a className="btn" href={`mailto:${profile.email}`}>Email Me</a>
        <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
