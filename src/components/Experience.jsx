import { Briefcase } from "lucide-react";
import { profile } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="container section">
      <h2 className="section__title">Experience</h2>
      <div className="xp-list">
        {profile.experience.map((e, i) => (
              <article className="xp-card category card glass show rise" key={i}>
                <header className="category__header">
                  <h3 className="category__title">{e.role}</h3>
                  <span className="category__crest" aria-hidden="true" title="Experience">
                    <span className="crest__glow" />
                    <span className="crest__icon"><Briefcase size={18} /></span>
                  </span>
                </header>
                <span className="xp-meta">{e.company} <span className="sep">•</span> {e.period}</span>
            <ul className="xp-points">
              {e.points.map((p, j) => <li className="rise xp-point" key={j}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
