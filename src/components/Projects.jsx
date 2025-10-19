import { profile } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="container section">
      <h2 className="section__title">Projects</h2>
      <div className="grid">
        {profile.projects.map(p => (
          <a className="card project tilt" key={p.title} href={p.link} target="_blank" rel="noreferrer">
            <h3>{p.title}</h3>
            <p className="muted">{p.stack}</p>
            <p>{p.desc}</p>
            <span className="arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
