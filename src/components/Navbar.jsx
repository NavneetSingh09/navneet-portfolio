import { useEffect, useState } from "react";

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

      <h1 className="logo">Navneet</h1>

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
          <a onClick={handleClick} className={active==="header"?"active":""} href="#header">
            Home
          </a>
        </li>

        <li>
          <a onClick={handleClick} className={active==="about"?"active":""} href="#about">
            About
          </a>
        </li>

        <li>
          <a onClick={handleClick} className={active==="projects"?"active":""} href="#projects">
            Projects
          </a>
        </li>

        <li>
          <a onClick={handleClick} className={active==="contact"?"active":""} href="#contact">
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;