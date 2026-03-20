import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";
import { useEffect, useState } from "react";

function App() {

  const [scrolled, setScrolled] = useState(false);

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

  /* ================= 🔥 CURSOR GLOW ================= */
  useEffect(() => {
    const cursor = document.querySelector(".cursor-glow");

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Track mouse position
    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth animation loop (IMPORTANT 🔥)
    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if(cursor){
        cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* 🔥 CURSOR GLOW ELEMENT */}
      <div className="cursor-glow"></div>

      <Navbar scrolled={scrolled} />
      <SocialBar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;