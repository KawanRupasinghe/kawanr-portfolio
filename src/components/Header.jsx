import { Moon, Sun } from "lucide-react";
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

  const toggleTheme = () => {
    const cur = document.documentElement.dataset.theme;
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <header className="container header">
      <a className="brand" href="#top" aria-label="Home">kawanr</a>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a className="btn" href="#contact">Contact</a>
        <button aria-label="Toggle theme" className="icon-btn" onClick={toggleTheme}>
          <span className="theme-icon show-in-dark"><Sun size={18} /></span>
          <span className="theme-icon show-in-light"><Moon size={18} /></span>
        </button>
      </nav>
    </header>
  );
}
