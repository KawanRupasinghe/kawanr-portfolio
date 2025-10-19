import { profile } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="container section">
      <h2 className="section__title">Experience</h2>
      <div className="timeline">
        {profile.experience.map((e, i) => (
          <div className="timeline__item rise" key={i}>
            <div className="timeline__dot" />
            <div className="timeline__card">
              <header className="timeline__header">
                <h3>{e.role}</h3>
                <span className="muted">{e.company} • {e.period}</span>
              </header>
              <ul className="card__list">
                {e.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
