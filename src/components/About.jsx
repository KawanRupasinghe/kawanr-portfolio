import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="container section">
      <h2 className="section__title">About</h2>
      <p>
        I’m a Computer Science undergrad who loves building real-world apps with
        clean architecture, automated tests, and simple UI that feels interactive.
      </p>
      <ul className="inline-list">
        <li><strong>Location:</strong> {profile.location}</li>
        <li><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li><strong>GitHub:</strong> <a href={profile.github} target="_blank" rel="noreferrer">/KawanRupasinghe</a></li>
        <li><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noreferrer">/kawan-rupasinghe</a></li>
      </ul>
    </section>
  );
}
