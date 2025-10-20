import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  User,
  X as XIcon,
} from "lucide-react";
import { profile } from "../data";

export default function Contact() {
  const waLink = (() => {
    const digits = String(profile.phone || "").replace(/\D/g, "");
    return digits ? `https://wa.me/${digits}` : null;
  })();

  const telHref = (() => {
    const cleaned = String(profile.phone || "").replace(/[^+\d]/g, "");
    return cleaned ? `tel:${cleaned}` : null;
  })();

  return (
    <section id="contact" className="container section">
      <h2 className="section__title">Contact</h2>
      {profile.sectionSubtitles?.contact && (
        <p className="muted">{profile.sectionSubtitles.contact}</p>
      )}

      <div className="contact__grid">
        {/* Left column: stacked small cards */}
        <div className="contact__left">
          {/* Contact information */}
          <aside className="contact__card card glass show card--sm">
            <h3 style={{ marginTop: 0 }}>Contact Information</h3>
            <ul className="contact__list">
              <li>
                <a
                  className="icon"
                  aria-label="Email"
                  href={`mailto:${profile.email}`}
                >
                  <Mail size={16} />
                </a>
                <a
                  className="about__link"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </li>

              {waLink && (
                <li>
                  <a
                    className="icon"
                    aria-label="WhatsApp"
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={16} />
                  </a>
                  <a
                    className="about__link"
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              )}

              {profile.phone && (
                <li>
                  {telHref ? (
                    <a className="icon" aria-label="Call" href={telHref}>
                      <Phone size={16} />
                    </a>
                  ) : (
                    <span className="icon">
                      <Phone size={16} />
                    </span>
                  )}
                  <span className="muted">{profile.phone}</span>
                </li>
              )}

              {profile.location && (
                <li>
                  <a
                    className="icon"
                    aria-label="Open location in Google Maps"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      profile.location
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin size={16} />
                  </a>
                  <a
                    className="about__link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      profile.location
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.location}
                  </a>
                </li>
              )}
            </ul>
          </aside>

          {/* Follow Me */}
          <aside className="contact__card card glass show card--sm">
            <h3 style={{ marginTop: 0 }}>Follow Me</h3>
            <div className="contact__socials">
              {profile.linkedin && (
                <a
                  aria-label="LinkedIn"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {profile.instagram && (
                <a
                  aria-label="Instagram"
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social"
                >
                  <Instagram size={18} />
                </a>
              )}
              {profile.twitter && (
                <a
                  aria-label="X"
                  href={profile.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social"
                >
                  <XIcon size={18} />
                </a>
              )}
              {profile.github && (
                <a
                  aria-label="GitHub"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </aside>
        </div>

        {/* Right: Contact form (Netlify Forms) */}
        <div className="contact__form card glass show">
          {/* IMPORTANT: use data-netlify-honeypot in React */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/" /* optional; keep default */
          >
            {/* Netlify form name */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot */}
            <p className="sr-only">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div className="field">
              <label htmlFor="name">Name</label>
              <div className="input-wrap">
                <span className="icon">
                  <User size={16} />
                </span>
                <input id="name" name="name" type="text" required />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <div className="input-wrap">
                <span className="icon">
                  <Mail size={16} />
                </span>
                <input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <div className="input-wrap textarea">
                <span className="icon">
                  <MessageCircle size={16} />
                </span>
                <textarea id="message" name="message" rows={5} required />
              </div>
            </div>

            {/* Optional reCAPTCHA widget (enable in Netlify → Forms first) */}
            {/* <div data-netlify-recaptcha="true"></div> */}

            <div className="contact__actions">
              <button className="btn" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
