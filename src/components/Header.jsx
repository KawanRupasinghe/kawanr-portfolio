import { Menu, Moon, Sun, X } from "lucide-react";
import React from "react";

export default function Header() {
  React.useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const theme = saved ?? (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  }, []);

  // Highlight active nav item while scrolling using IntersectionObserver
  React.useEffect(() => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    const map = new Map();
    const sections = links
      .map(a => {
        const id = a.getAttribute('href');
        try { return document.querySelector(id); } catch { return null; }
      })
      .filter(Boolean);

    // Also observe the hero (#top) so we can avoid highlighting About while at the top
    const hero = document.querySelector('#top');
    if (hero) sections.push(hero);

    let currentId = null;
    const setActive = (id) => {
      if (currentId === id) return;
      currentId = id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => map.set(entry.target.id, entry));
      // If hero is significantly visible, clear any active state and disable nav hover visuals
    const heroEntry = map.get('top');
    const heroVisible = !!(heroEntry && heroEntry.isIntersecting && heroEntry.intersectionRatio >= 0.3);
      document.documentElement.classList.toggle('at-hero', heroVisible);
      if (heroVisible) {
        links.forEach(a => a.classList.remove('active'));
        currentId = null;
        return;
      }

      // Pick the most visible section in viewport (excluding hero)
      let maxRatio = 0; let best = currentId;
      map.forEach((e, id) => {
        if (id === 'top') return;
        if (e.isIntersecting && e.intersectionRatio >= maxRatio) {
          maxRatio = e.intersectionRatio; best = id;
        }
      });
      if (best) setActive(best);
    }, {
      root: null,
      threshold: [0.1, 0.2, 0.3, 0.5, 0.7],
      rootMargin: "-10% 0px -60% 0px" // engage hero sooner and keep at-hero until more scrolled
    });

    sections.forEach(sec => { observer.observe(sec); });
    return () => { sections.forEach(sec => observer.unobserve(sec)); observer.disconnect(); };
  }, []);

  const toggleTheme = () => {
    const cur = document.documentElement.dataset.theme;
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  // Mobile nav state
  const [open, setOpen] = React.useState(false);
  const toggleNav = () => {
    setOpen((v) => !v);
    document.documentElement.classList.toggle('nav-open');
  };
  const closeNav = () => {
    setOpen(false);
    document.documentElement.classList.remove('nav-open');
  };

  // Close mobile nav on resize to larger screens
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) closeNav();
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close menu when clicking anywhere outside the nav
  React.useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      const nav = document.querySelector('.nav');
      if (nav && nav.contains(e.target)) return; // clicks inside nav are handled separately
      closeNav();
    };
    const onKey = (e) => {
      if (e.key === 'Escape') closeNav();
    };
    document.addEventListener('click', onDocClick, true);
    document.addEventListener('keydown', onKey, true);
    return () => {
      document.removeEventListener('click', onDocClick, true);
      document.removeEventListener('keydown', onKey, true);
    };
  }, [open]);

  // Track mobile breakpoint to place theme toggle appropriately
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 900;
  });
  React.useEffect(() => {
    setIsMobile(window.innerWidth <= 900);
  }, []);

  return (
    <header className="container header">
      <a className="brand" href="#top" aria-label="Home">kawanr</a>

      <div className="header__right">
        {/* Theme toggle (mobile: next to hamburger) */}
        {isMobile && (
          <button aria-label="Toggle theme" className="icon-btn theme-toggle" onClick={toggleTheme}>
            <span className="theme-icon show-in-dark"><Sun size={18} /></span>
            <span className="theme-icon show-in-light"><Moon size={18} /></span>
          </button>
        )}

        {/* Mobile menu toggle (visible on small screens) */}
        <button
          className="icon-btn mobile-menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={toggleNav}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className={`nav ${open ? 'nav--open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <a href="#about" onClick={closeNav}>About</a>
          <a href="#skills" onClick={closeNav}>Skills</a>
          <a href="#experience" onClick={closeNav}>Experience</a>
          <a href="#projects" onClick={closeNav}>Projects</a>
          <a className="btn" href="#contact" onClick={closeNav}>Contact</a>
          {/* Theme toggle (desktop: keep inside nav as before) */}
          {!isMobile && (
            <button aria-label="Toggle theme" className="icon-btn theme-toggle" onClick={toggleTheme}>
              <span className="theme-icon show-in-dark"><Sun size={18} /></span>
              <span className="theme-icon show-in-light"><Moon size={18} /></span>
            </button>
          )}
        </nav>
      </div>
      {/* Close menu when clicking outside (use capture on document) */}
      {open && (
        <div className="nav-backdrop" onClick={closeNav} aria-hidden="true" />
      )}
    </header>
  );
}
