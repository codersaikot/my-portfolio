// ============================================================
// App.jsx — Root component
// Composes all sections, manages dark/light theme state
// ============================================================
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero   from "./components/Hero";
import {
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer
} from "./components/Sections";

export default function App() {
  // Default to dark mode; persists in localStorage
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("portfolio-theme");
    return stored ? stored === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="app">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
