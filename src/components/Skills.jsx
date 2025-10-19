import { profile } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="container section">
      <h2 className="section__title">Skills</h2>
      <p className="muted">Things I work with most.</p>
      <div className="skills-grid">
        {profile.skills.map((s) => (
          <div className="skill glass rise" key={s}>
            <span className="skill__dot" />
            <span className="skill__name">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
