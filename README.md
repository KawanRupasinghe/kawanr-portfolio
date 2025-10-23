# Kawan Rupasinghe Portfolio

A minimal personal portfolio built with **React + Vite** and hand-crafted **HTML/CSS** . It features a blue light/dark theme, smooth micro-animations, a masonry-style Skills section with categories, an alternating timeline, and a production-ready CI/CD pipeline (GitHub Actions → Netlify). Contact messages are handled securely via **Netlify Forms**

> **Live site:** https://kawanr.netlify.netlify.app  
> **Repo:** `KawanRupasinghe/kawanr-portfolio`

---

## ✨ Highlights

- **Design-first**: clean blue palette, circular hero photo, glass/gradient accents, animated abstract background.
- **Light/Dark**: theme toggle + `prefers-color-scheme` awareness.
- **Creative Skills**: category filters + varied-size tiles (sm/md/lg/xl); crest icon per category.
- **Experience & Achievements**: centered zig-zag timeline with compact, readable typography.
- **Contact**: Netlify Forms + email notifications.
- **Fast by default**: Vite build and asset-level optimizations.
- **CI/CD**: Build → Test → Deploy with artifacts and caching (GitHub Actions → Netlify).
<!-- - **Testing**: Vitest + React Testing Library + jsdom. -->

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), HTML/CSS
- **Icons**: `lucide-react`
<!-- - **Testing**: Vitest, @testing-library/react, @testing-library/user-event, jsdom -->
- **CI/CD**: GitHub Actions (build, test, deploy)
- **Hosting**: Netlify
- **Package Manager**: npm

---

## 📁 Project Structure

```text
kawanr-portfolio/
├─ public/
│  ├─ images/
│  │  ├─ me.png
│  │  ├─ favicon-light.png
│  │  └─ favicon-dark.png
│  ├─ _redirects                 
│  └─ index.html                 # Root HTML + Netlify form template
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Skills.jsx              
│  │  ├─ Experience.jsx
│  │  ├─ Projects.jsx
│  │  └─ Contact.jsx             # Netlify form
│  ├─ styles/
│  │  └─ style.css               # theme, animations, layout
│  ├─ data.jsx                   # Profile + content
│  ├─ App.jsx
│  └─ main.jsx
├─ tests/
│  ├─ setup.js                   # Vitest + RTL setup, jest-dom matchers
│  ├─ App.test.jsx
│  └─ Header.test.jsx
├─ .github/workflows/ci.yml
├─ netlify.toml                  # Keep Forms post-processing on
├─ package.json
└─ README.md
```

---

## 🧑‍💻 Getting Started

```bash
# Install deps
npm ci

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Content & Theme (Quick Edit)

- **Content:** `src/data.jsx` → update name, role, links, blurb, tags, `skillsByCategory`, `experience`, `achievements`, `projects`.
- **Styles:** `src/styles/style.css` → blue palette tokens (`--a1`, `--a2`, `--bg`, `--text`, etc.), header glass, background, animations.
- **Hero image:** place at `public/images/me.png` (or import from `src/assets`).

---

## 🧪 Testing

Vitest · React Testing Library · jsdom

# CI-friendly single run

npm run test -- --run

# Watch mode locally

npm test

---

## 🚀 CI/CD (GitHub Actions → Netlify)

Pipeline: Build & Test → Upload dist artifact → Deploy.

Repo secrets (Settings → Secrets and variables → Actions):

NETLIFY_AUTH_TOKEN

NETLIFY_SITE_ID

SPA redirect: public/\_redirects:

/\* /index.html 200

---

## 🙋‍♂️ About Me

Kawan Rupasinghe — CS Undergrad · Full-Stack (Java/React)
📍 Colombo, Sri Lanka

✉️ kawanwrupasinghe@gmail.com

🔗 https://github.com/KawanRupasinghe

🧑‍💼 https://www.linkedin.com/in/kawan-rupasinghe

“I design, build, and ship human-centered full-stack apps with agile teamwork.”
