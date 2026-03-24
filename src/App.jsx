import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";
import { useEffect, useState } from "react";

function App() {

  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  /* ================= THEME ================= */
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  /* ================= NAVBAR SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= FADE-IN ================= */
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
        }
      });
    });
    faders.forEach(el => observer.observe(el));
  }, []);

  /* ================= CURSOR GLOW ================= */
  useEffect(() => {
    const cursor = document.querySelector(".cursor-glow");
    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
    const move = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      if(cursor) cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", move);
    animate();
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="cursor-glow"></div>
      <Navbar scrolled={scrolled} theme={theme} toggleTheme={toggleTheme} />
      <SocialBar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;