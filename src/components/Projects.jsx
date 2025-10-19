import { Code2, Layers, Package, PencilRuler, Server } from "lucide-react";
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
  return (
      <section id="projects" className="container section">
        <h2 className="section__title">Projects</h2>
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
                {p.stack && <p className="muted" style={{ margin: "0 0 6px" }}>{p.stack}</p>}
                {p.desc && <p style={{ margin: 0 }}>{p.desc}</p>}
              </article>
            );
          })}
        </div>
      </section>
  );
}
