import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Navbar() {

  const [active, setActive] = useState("header");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {

      // 🔥 Navbar blur
      setScrolled(window.scrollY > 50);

      let current = "";

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          current = section.id;
        }
      });

      // 🔥 Fix for last section
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
        current = "contact";
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 close menu on click
  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : "transparent"}`}>

      {/* 🔥 LOGO + MOBILE SOCIAL STACKED */}
      <div className="logo-block">
        <h1 className="logo">Navneet</h1>
        <div className="mobile-social">
          <a href="https://github.com/NavneetSingh09" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/navneet-kumar-singh-842429154" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/Navneetshenron" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/_.navneet.__.kumar" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      {/* 🔥 HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 🔥 NAV LINKS */}
      <ul className={menuOpen ? "open" : ""}>

        <li>
          <a onClick={handleClick} className={active==="header" ? "active" : ""} href="#header">
            Home
          </a>
        </li>

        <li>
          <a onClick={handleClick} className={active==="about" ? "active" : ""} href="#about">
            About
          </a>
        </li>

        <li>
          <a onClick={handleClick} className={active==="projects" ? "active" : ""} href="#projects">
            Projects
          </a>
        </li>

        <li>
          <a onClick={handleClick} className={active==="contact" ? "active" : ""} href="#contact">
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;