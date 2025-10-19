import { Database, Globe, Keyboard, Trophy, Users, Wrench } from "lucide-react";
import React from "react";
import { profile } from "../data";

/* No forced text-style; we now use line icons for a consistent skeleton look */
const mono = (s) => s;

/* Crest icons per skills category (top-right on each card) */
const CRESTS = {
  "Programming Languages": Keyboard,
  "Web development and Frameworks": Globe,
  "Databases": Database,
  "Tools and Platforms": Wrench,
  "Collaboration": Users,
};

/* Tab icons */
const TAB_ICONS = {
  Skills: Wrench,
  Achievements: Trophy,
};

/* --- Size helper for skill tiles (masonry layout) --- */
function sizeFor(skill) {
  const len = skill.length;
  if (len <= 3) return "sm";        // C, CSS
  if (len <= 7) return "md";        // Java, MySQL, Canva
  if (len <= 14) return "lg";       // JavaScript, React.js, Postman
  return "xl";                      // Agile (Project Management)
}

export default function Skills() {
  const categories = Object.keys(profile.skillsByCategory || {});
  const [tab, setTab] = React.useState("Skills"); // "Skills" | "Achievements"

  // Prepare achievements: latest on top using year detection in `when`
  const achievements = React.useMemo(() => {
    const items = Array.isArray(profile.achievements) ? [...profile.achievements] : [];
    const yearOf = (w) => {
      if (!w) return -Infinity;
      const m = String(w).match(/(?:19|20)\d{2}/g);
      return m ? Math.max(...m.map(Number)) : -Infinity;
    };
    items.sort((a, b) => yearOf(b.when) - yearOf(a.when));
    return items;
  }, [profile.achievements]);

  return (
    <section id="skills" className="container section">
      <h2 className="section__title">Skills</h2>
      <p className="muted">What I build with — and milestones that matter.</p>

      {/* Tabs */}
      <div className="skills__tabs">
        {(["Skills", "Achievements"]).map((t) => (
          <button
            key={t}
            className={`btn btn--sm ${tab === t ? "" : "ghost"}`}
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            type="button"
          >
            {(() => { const Icon = TAB_ICONS[t]; return (
              <span className="icon" aria-hidden="true" style={{ marginRight: 6 }}><Icon size={16} /></span>
            ); })()}
            {t}
          </button>
        ))}
      </div>

      {/* SKILLS view */}
      {tab === "Skills" && (
        <div className="skills__categories">
          {categories.map((cat) => (
            <article key={cat} className="category card glass show">
              <header className="category__header">
                <h3 className="category__title">{cat}</h3>
                <span className="category__crest" aria-hidden="true" title={cat}>
                  <span className="crest__glow" />
                  {(() => { const Crest = CRESTS[cat]; return (
                    <span className="crest__icon">{Crest ? <Crest size={18} /> : "✦"}</span>
                  ); })()}
                </span>
              </header>

              <div className="category__grid">
                {profile.skillsByCategory[cat].map((s) => (
                  <div
                    className={`skill-tile tile-${sizeFor(s)} rise`}
                    key={s}
                    title={s}
                  >
                    <span className="skill__dot" />
                    <span className="skill__name">{s}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ACHIEVEMENTS view */}
      {tab === "Achievements" && (
        <div className="skills__achievements">
          {achievements.length > 0 ? (
            <div className="timeline zigzag">
              {achievements.map((a, i) => {
                const side = i % 2 === 0 ? "left" : "right"; // alternate sides, latest first
                return (
                  <div className={`timeline__item ${side} rise`} key={`${a.title}-${a.when}-${i}`}>
                    <div className="timeline__dot" />
                    <div className="timeline__card">
                      <header className="timeline__header">
                        <h3 style={{ margin: "0 0 4px" }}>{a.title}</h3>
                        <span className="muted">{[a.org, a.when].filter(Boolean).join(" • ")}</span>
                      </header>
                      {a.points?.length ? (
                        <ul className="card__list">
                          {a.points.map((p, j) => <li key={j}>{p}</li>)}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="card" style={{ maxWidth: 760, margin: "16px auto" }}>
              <p className="muted" style={{ margin: 0 }}>
                No achievements added yet. Update <code>profile.achievements</code> in <code>src/data.jsx</code>.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
