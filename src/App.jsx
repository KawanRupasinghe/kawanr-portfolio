import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx"; // ← add

export default function App() {
  return (
    <>
      <div className="bg-scene" /> {/* ← creative background layer */}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />    
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
