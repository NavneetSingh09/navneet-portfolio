import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {

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
      <Navbar />
      <SocialBar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Analytics />
    </>
  );
}

export default App;