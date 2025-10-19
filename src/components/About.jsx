import { profile } from "../data";

/** X (Twitter) — clean inline logo */
function XIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
      <path d="M18.3 3H21l-6.65 7.6L22.5 21h-5.5l-4.3-5.2L7.7 21H5l7.05-8.05L1.5 3h5.6l4 4.8L18.3 3Z" fill="currentColor"/>
    </svg>
  );
}

/** Instagram — compact solid mark (white via currentColor) */
function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
      <path
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.25-3.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** LinkedIn — minimal inline (white via currentColor) */
function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
      <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-1 1.9-2.1 4-2.1 4.3 0 5.1 2.8 5.1 6.4V24h-4v-7.7c0-1.8 0-4.2-2.6-4.2s-3 2-3 4.1V24h-4V8.5z"/>
    </svg>
  );
}

export default function About() {
  const socials = [
    profile.linkedin && { key: "linkedin", href: profile.linkedin, icon: <LinkedInIcon /> },
    profile.twitter  && { key: "x",        href: profile.twitter,  icon: <XIcon /> },
    profile.instagram&& { key: "instagram",href: profile.instagram,icon: <InstagramIcon /> },
  ].filter(Boolean);

  return (
    <section id="about" className="container section about">
      <h2 className="section__title">About</h2>

      <p className="about__lead">
        I’m a CS undergrad who loves shipping things people actually use.
        I work across the stack (Java → React), care about clean architecture,
        and sweat the UI details. I move fast with agile habits, tests, and tidy DevOps
        so features land smoothly—not messily.
      </p>

      <div className="about__meta">
        <div className="about__meta-item hover-card">
          <span className="about__meta-key">Location</span>
          <span className="about__meta-val">{profile.location}</span>
        </div>
        <div className="about__meta-item hover-card">
          <span className="about__meta-key">Email</span>
          <a className="about__link" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="about__meta-item hover-card">
          <span className="about__meta-key">GitHub</span>
          <a className="about__link" href={profile.github} target="_blank" rel="noreferrer">KawanRupasinghe</a>
        </div>
      </div>

      {socials.length > 0 && (
        <>
          <h3 className="about__follow-title">Let's Connect</h3>
          <ul className="about__socials about__socials--center">
            {socials.map(s => (
              <li key={s.key}>
                <a
                  className={`social-card social-${s.key}`}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.key === "x" ? "Follow on X" : `Follow on ${s.key}`}
                  title={s.key === "x" ? "X" : s.key.charAt(0).toUpperCase()+s.key.slice(1)}
                >
                  <span className="social-card__icon">{s.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
