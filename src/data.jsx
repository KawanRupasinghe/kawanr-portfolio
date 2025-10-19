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

  blurb:
    "I design, build, and ship human-centered full-stack apps with agile teamwork",

  tags: [
    "Full-Stack (Java · React)",
    "Agile / Scrum",
    "UI/UX & Accessibility",
    "Testing (Vitest · RTL)",
    "CI/CD · Netlify"
  ],

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
        "Designed and Developed frontend interfaces for learning chatbots",
        "Collaborated to re-design SLIIT CoEAI Website for improved UX"
      ]
    }
  ],

  /* ---- ACHIEVEMENTS (from your CV) ---- */
  achievements: [
    {
      title: "Finalist — Codefest Algothon",
      org: "SLIIT",
      when: "2025",
      points: []
    },
    {
      title: "Certificate Course on Application Development using JavaSE",
      org: "University of Colombo School of Computing",
      when: "2023",
      points: []
    },
    {
      title: "Gold Medal (1st place) — 15th Young Computer Scientist Competition",
      org: "UCSC — Junior Category (Non-government School)",
      when: "2016",
      points: []
    },
    {
      title: "Finalist — Sri Lanka Robotics Challenge Competition",
      org: "University of Moratuwa — School Category",
      when: "2018",
      points: []
    },
    {
      title: "Cambridge English Level 2 Certificate in ESOL International",
      org: "Certificate in Professional English — CPE",
      when: "2018",
      points: []
    }
  ],

  projects: [
    {
      title: "The Glaze — Cake Shop Management System",
      stack: "Spring Boot, React (Vite), SQL",
      link: "#",
      desc: "Developed a full-stack web app for a cake shop: customers place/track orders; owner manages orders efficiently via Java Spring Boot, SQL, and React with Vite (Agile with Jira)."
    },
    {
      title: "The Glaze — Mobile App Prototype",
      stack: "Figma",
      link: "#",
      desc: "Designed customer and admin mobile app prototypes applying HCI principles for user-friendly UI, smooth navigation, and clear visuals."
    },
    {
      title: "Fault-Tolerant Distributed Logging System",
      stack: "Spring Boot, MongoDB, Raft",
      link: "#",
      desc: "Built a distributed logging system with Raft consensus (leader election, replication, automatic failover). Integrated Netflix Eureka for service discovery and MongoDB for durable, scalable log storage."
    },
    {
      title: "FormLangPP — DSL for HTML form generation",
      stack: "Flex & Bison (Lex & Yacc)",
      link: "#",
      desc: "Built a domain-specific language with Flex & Bison to generate HTML forms; implemented grammar, parsing, and code generation for automated form creation."
    },
    {
      title: "AquaMonitor — IoT Fish Tank Monitoring System",
      stack: "ESP32 microcontroller, Firebase, JavaScript",
      link: "#",
      desc: "Real-time temperature monitoring, water level tracking, turbidity measurement, and a JavaScript web dashboard for data visualization with Firebase database."
    },
    {
      title: ".NET Project — Coming Soon",
      stack: ".NET, C#, SQL",
      link: "#",
      desc: "Placeholder for an upcoming .NET application."
    },
    {
      title: "Figma Prototype — Coming Soon",
      stack: "Figma",
      link: "#",
      desc: "Placeholder for another upcoming interactive UI prototype."
    }
  ]
};
