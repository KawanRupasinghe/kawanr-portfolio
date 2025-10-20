export const profile = {
  name: "Kawan Rupasinghe",
  role: "Full-Stack Developer  ·  UI/UX Designer  ·  CS Undergraduate",
  location: "Colombo, Sri Lanka",
  email: "kawanwrupasinghe@gmail.com",
  phone: "+94 71 345 1695",
  github: "https://github.com/KawanRupasinghe",
  linkedin: "https://www.linkedin.com/in/kawan-rupasinghe",
  twitter: "https://x.com/@Kaawan_R",
  instagram: "https://www.instagram.com/kaawan.r",

  blurb: "I design, build, and ship human-centered full-stack apps with agile teamwork",

  tags: [
    "Full-Stack (Java · React)",
    "Agile / Scrum",
    "UI/UX & Accessibility",
    "Testing (Vitest · RTL)",
    "CI/CD · Netlify"
  ],

  /* ---- Section subtitles (shown under H2 titles) ---- */
  sectionSubtitles: {
    about: "Who I am and what I bring",
    skills: "What I build with — and milestones that matter",
    experience: "Where I’ve applied it — from intern to contributor",
    projects: "From “what if” to “it works!” — things I’ve built",
    contact: "Open to internships and new challenges — say hi"
  },

  /* ---- CATEGORIZED SKILLS ---- */
  skillsByCategory: {
    "Programming Languages": ["C", "Java", "JavaScript"],
    "Web development and Frameworks": ["Spring Boot", ".NET", "React.js", "HTML", "CSS"],
    "Databases": ["MySQL", "AzureSQL"],
    "Tools and Platforms": ["GitHub", "Jira", "Figma", "VS Code", "IntelliJ", "Postman", "Canva"],
    "Collaboration": ["Agile (Project Management)", "Communication", "Teamwork", "Leadership"]
  },

  experience: [
    {
      company: "SLIIT",
      role: "Research Intern — Frontend Developer",
      period: "Dec 2024 – Feb 2025",
      points: [
        "Designed and developed frontend interfaces for module-based learning chatbots",
        "Collaborated to re-design SLIIT CoEAI website for improved user experience"
      ]
    }
  ],

  /* ---- ACHIEVEMENTS (from your CV) ---- */
  achievements: [
    { title: "Finalist — Codefest Algothon", org: "SLIIT", when: "2025", points: [] },
    { title: "Certificate Course on Application Development using JavaSE", org: "University of Colombo School of Computing", when: "2023", points: [] },
    { title: "Gold Medal (1st place) — 15th Young Computer Scientist Competition", org: "UCSC — Junior Category (Non-government School)", when: "2016", points: [] },
    { title: "Finalist — Sri Lanka Robotics Challenge Competition", org: "University of Moratuwa — School Category", when: "2018", points: [] },
    { title: "Cambridge English Level 2 Certificate in ESOL International", org: "Certificate in Professional English — CPE", when: "2018", points: [] }
  ],

  projects: [
    {
      title: "The Glaze — Cake Shop Management System",
      stack: "Spring Boot, React.js, MySQL",
      link: "#",
      image: "/images/projects/glaze-web.png",
      desc: "Full-stack web app for cake shop operations.",
      points: [
        "Customer portal to browse, order, and track",
        "Admin dashboard for orders and inventory",
        "Spring Boot REST APIs with MySQL",
        "React (Vite) frontend; Agile with Jira"
      ]
    },
    {
      title: "The Glaze — Mobile App Prototype",
      stack: "Figma, UI/UX Design",
      link: "#",
      image: "/images/projects/glaze-mobile.png",
      desc: "Mobile app prototype for customers and admins.",
      points: [
        "HCI-driven flows and component library",
        "Ordering and order-tracking journeys",
        "Admin screens for product and orders",
        "High-fidelity frames and clickable prototype"
      ]
    },
    {
      title: "Fault-Tolerant Distributed Logging System",
      stack: "Spring Boot, MongoDB, Raft",
      link: "#",
      image: "/images/projects/distributed-logging.jpg",
      desc: "Distributed logging with Raft and failover.",
      points: [
        "Leader election and log replication via Raft",
        "Automatic failover and consistency",
        "Eureka for service discovery",
        "MongoDB-backed durable log storage"
      ]
    },
    {
      title: "FormLangPP — DSL for HTML form generation",
      stack: "Flex & Bison (Lex & Yacc), C",
      link: "#",
      image: "/images/projects/formlangpp.jpg",
      desc: "DSL to generate HTML forms from grammar.",
      points: [
        "Lexer and parser with Flex & Bison",
        "Grammar for fields and validation",
        "HTML code generation from AST",
        "CLI tool with sample specs"
      ]
    },
    {
      title: "AquaMonitor — IoT Fish Tank Monitoring System",
      stack: "ESP32 microcontroller, Firebase, JavaScript, HTML/CSS",
      link: "#",
      image: "/images/projects/aquamonitor.jpg",
      desc: "ESP32-based real-time aquarium monitoring.",
      points: [
        "Sensors for temperature, level, turbidity",
        "Wi‑Fi push to Firebase Realtime DB",
        "Web dashboard with charts and alerts",
        "Modular hardware/firmware design"
      ]
    },
    {
      title: "AquaChamps - Swimming Tournament Management System",
      stack: ".NET, C#, React.js, AzureSQL",
      link: "#",
      image: "/images/projects/aquachamps.png",
      desc: ".NET-based tournament management app.",
      points: [
        "Event scheduling and lane assignments",
        "Athlete registration and heats",
        "Results tracking and leaderboard",
        "Admin portal backed by Azure SQL"
      ]
    },
    {
      title: "FuelGo - Mobile App Prototype",
      stack: "Figma, UI/UX Design",
      link: "#",
      image: "/images/projects/fuelgo.png",
      desc: "UI/UX prototype for fuel station app.",
      points: [
        "Station locator and queue status screens",
        "Refueling flow with clear CTAs",
        "Design system and components",
        "Clickable prototype for user tests"
      ]
    }
  ]
};
