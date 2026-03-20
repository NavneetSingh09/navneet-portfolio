import { useEffect, useState } from "react";

function Navbar() {

  const [active, setActive] = useState("header");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {

      // 🔥 Navbar blur trigger
      setScrolled(window.scrollY > 50);

      let current = "";

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        // 🔥 Better detection (center of screen)
        if (rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2) {
          current = section.id;
        }
      });

      // 🔥 Fix for last section (Contact)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
        current = "contact";
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    // 🔥 Run once on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>

      <h1 className="logo">Navneet</h1>

      <ul>
        <li>
          <a className={active === "header" ? "active" : ""} href="#header">
            Home
          </a>
        </li>

        <li>
          <a className={active === "about" ? "active" : ""} href="#about">
            About
          </a>
        </li>

        <li>
          <a className={active === "projects" ? "active" : ""} href="#projects">
            Projects
          </a>
        </li>

        <li>
          <a className={active === "contact" ? "active" : ""} href="#contact">
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;