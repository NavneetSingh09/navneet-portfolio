import { useEffect, useState } from "react";

function Header() {

  const roles = [
    "MS CS Graduate",
    "Full Stack Developer",
    "Java & Spring Boot Engineer",
    "3+ Years of Experience",
    "Open to US Opportunities",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 90;
    const timer = setTimeout(() => {
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      setText(updatedText);
      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
      if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="header">
      <div
        className="parallax-bg"
        style={{
          transform: `translateY(${offset * 0.4}px) scale(${1 + offset * 0.0003})`
        }}
      />
      <div className="parallax-overlay"></div>
      <div className="container">
        <div className="header-text fade-in">
          <p className="intro-text">Hi, I am</p>
          <h1 className="main-name">Navneet <span>Singh</span></h1>
          <p className="typing-text">
            <span className="gradient-text">{text}</span>
            <span className="cursor">|</span>
          </p>
          <a href="/Navneet_Singh_Resume.pdf" download className="cv-btn">
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;