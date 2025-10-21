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
      link: "https://github.com/KawanRupasinghe/the-glaze-cakeshop.git",
      image: "/images/projects/glaze-web.png",
      desc: "Full-stack web app for cake shops.",
      points: [
        "Customer portal to browse, order and track status",
        "Admin dashboard for orders and inventory",
        "Spring Boot REST APIs with React and MySQL",
        "Agile (SCRUM) development with Jira and GitHub"
      ]
    },
      {
      title: "AquaChamps - Swimming Tournament Management System",
      stack: ".NET, C#, React.js, AzureSQL",
      link: "https://github.com/KawanRupasinghe/aquachamps-stms.git",
      image: "/images/projects/aquachamps.png",
      desc: "Web app for swimming tournaments.",
      points: [
        "Admin dashboard for managing tournaments, players and results",
        "Event-based ranking and point allocation system",
        "Real-time leaderboard with filtering and PDF export",
        "Secure and scalable with ASP.NET, React, and Azure"
      ]
    },
    {
      title: "Fault-Tolerant Distributed Logging System",
      stack: "Spring Boot, MongoDB, Raft",
      link: "https://github.com/KawanRupasinghe/distributed-logging-system.git",
      image: "/images/projects/distributed-logging.jpg",
      desc: "Distributed logging system with Raft.",
      points: [
        "Leader election and log replication via Raft",
        "Automatic failover and consistency",
        "Eureka for service discovery",
        "MongoDB-backed durable log storage"
      ]
    },

    {
      title: "The Glaze — Mobile App Prototype",
      stack: "Figma, UI/UX Design",
      link: "https://www.figma.com/design/zY4f71tZt8dxoukdY0Mshj/The-Glaze?node-id=46-5&t=zQm2D26BY1R5uaEt-1",
      image: "/images/projects/glaze-mobile.png",
      desc: "Mobile app prototype for cake shops.",
      points: [
        "Real-time order tracking with payment upload verification",
        "Admin dashboard for managing cakes, prices, and order statuses",
        "Image-focused catalog with simple navigation and filters",
        "High fidelity prototype and smooth navigation flow"
      ]
     },
     {
      title: "FuelGo - Mobile App Prototype",
      stack: "Figma, UI/UX Design",
      link: "https://www.figma.com/design/XR4TDUN040rR5c7cgVoy4v/FuelGo?node-id=132-16378&t=mkTL2CGV1Lzg2pkt-1",
      image: "/images/projects/fuelgo.png",
      desc: "UI/UX prototype for fuel station app.",
      points: [
       "Real-time fuel order tracking and status updates",
       "Admin dashboard for managing orders and payments",
       "Intuitive fuel catalog with search and filter options",
       "Low fidelity wireframes and high-fidelity prototype"
      ]
    },
    {
      title: "FormLangPP — DSL for HTML form generation",
      stack: "Flex & Bison (Lex & Yacc), C",
      link: "https://github.com/KawanRupasinghe/FormLangPP-DSL.git",
      image: "/images/projects/formlangpp.jpg",
      desc: "DSL to generate HTML forms.",
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
      desc: "IoT based real-time aquarium monitoring.",
      points: [
        "Sensors for temperature, level, turbidity",
        "Wi‑Fi push to Firebase Realtime DB",
        "Web dashboard with charts and alerts",
        "Modular hardware/firmware design"
      ]
    },
  ]
};
