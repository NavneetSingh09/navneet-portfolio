import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialBar() {
  return (
    <div className="social-bar">

      <a href="https://github.com/NavneetSingh09" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>

      <a href="https://linkedin.com/in/navneet-kumar-singh-842429154" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>

      <a href="https://x.com/Navneetshenron" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>

      <a href="https://instagram.com/_.navneet.__.kumar" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>

    </div>
  );
}

export default SocialBar;