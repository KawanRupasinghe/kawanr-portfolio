import { Code2, Layers, Package, PencilRuler, Server, X } from "lucide-react";
import React from "react";
import { profile } from "../data";

const crestFor = (title, stack) => {
  const t = (title + " " + (stack || "")).toLowerCase();
  if (t.includes(".net") || t.includes("c#")) return Server; // dotnet-like
  if (t.includes("figma")) return PencilRuler; // design/prototype
  if (t.includes("iot") || t.includes("hardware") || t.includes("esp32")) return Package; // device/box
  if (t.includes("distributed") || t.includes("microservice") || t.includes("logging")) return Layers; // architecture
  return Code2; // default code/project icon
};

export default function Projects() {
  const [open, setOpen] = React.useState(null);
  const close = () => setOpen(null);
  const tagsOf = (stack) => String(stack || "").split(',').map(s => s.trim()).filter(Boolean);
  const pointsOf = (p) => {
    const limitWords = (s, n = 14) => {
      const parts = String(s).split(/\s+/).filter(Boolean);
      return parts.length > n ? parts.slice(0, n).join(" ") + "…" : parts.join(" ");
    };
    const list = Array.isArray(p?.points) ? p.points : [];
    return list.map((s) => limitWords(s));
  };
  return (
      <section id="projects" className="container section">
        <h2 className="section__title">Projects</h2>
        {profile.sectionSubtitles?.projects && (
          <p className="muted">{profile.sectionSubtitles.projects}</p>
        )}
        <div className="grid">
          {profile.projects.map((p) => {
            const Crest = crestFor(p.title, p.stack);
            return (
              <article key={p.title} className="project-card category card glass show rise">
                <header className="category__header">
                  <h3 className="category__title">{p.title}</h3>
                  <span className="category__crest" aria-hidden="true" title={p.title}>
                    <span className="crest__glow" />
                    <span className="crest__icon"><Crest size={18} /></span>
                  </span>
                </header>
                {p.stack && (
                  <div className="tags" aria-label="Technologies">
                    {tagsOf(p.stack).map((t) => (
                      <span key={t} className="tag chip-ghost">{t}</span>
                    ))}
                  </div>
                )}
                {p.desc && <p className="project__desc one-line" style={{ margin: 0 }}>{p.desc}</p>}
                <div className="project__footer">
                  <button className="btn btn--xs ghost" type="button" onClick={() => setOpen(p)} style={{ cursor:'pointer' }}>More</button>
                  {p.link && (
                    <a className="btn btn--xs outline" href={p.link} target="_blank" rel="noreferrer">View</a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        {open && (
          <div className="modal-backdrop" onClick={close}>
            <div className="modal card" role="dialog" aria-modal="true" aria-label={`${open.title} details`} onClick={(e) => e.stopPropagation()}>
              <header className="modal__header">
                <h3 className="section__title" style={{ margin: 0 }}>{open.title}</h3>
                <button className="icon-btn" aria-label="Close" onClick={close}><X size={16} /></button>
              </header>
              {(() => { const isFigma = String(open.stack || '').toLowerCase().includes('figma');
              return (
              <div className={`modal__content modal__content--split ${isFigma ? 'modal__content--figma' : ''}`}>
                <div className={`modal__media ${isFigma ? 'modal__media--sm' : ''}`}>
                  <img src={open.image || "/images/placeholder.svg"} alt="Project preview" />
                </div>
                <div className="modal__body">
                  {open.stack && (
                    <div className="tags" style={{ marginTop: 4, justifyContent:'flex-start' }}>
                      {tagsOf(open.stack).map((t) => (
                        <span key={t} className="tag chip-ghost">{t}</span>
                      ))}
                    </div>
                  )}
                  {open.desc && (
                    <p style={{ marginTop: 8 }}>{open.desc}</p>
                  )}
                  {pointsOf(open).length > 0 && (
                    <>
                      <h4 className="modal__subheading" style={{ marginTop: 12, textAlign: 'left' }}>Key Features</h4>
                      <ul className="card__list" style={{ marginTop: 6, textAlign: 'left' }}>
                        {pointsOf(open).map((pt, i) => (<li key={i}>{pt}</li>))}
                      </ul>
                    </>
                  )}
                  <div className="modal__actions">
                    {open.link && <a className="btn btn--sm outline" href={open.link} target="_blank" rel="noreferrer">View</a>}
                  </div>
                </div>
              </div>
              ); })()}
            </div>
          </div>
        )}
      </section>
  );
}
