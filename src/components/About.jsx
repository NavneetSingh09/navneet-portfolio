import { useState } from "react";

function About() {

  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="fade-in">
      <div className="container">
        <div className="row">

          <div className="about-col-1">
            <img src="/images/navneet2.png" alt="profile" />
          </div>

          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>

            <p>
              MS Computer Science student at DePaul University. Passionate about backend
              development, system design, and building scalable applications using Java & Spring Boot.
            </p>

            {/* TAB TITLES */}
            <div className="tab-titles">
              <p 
                className={activeTab === "skills" ? "tab-links active-link" : "tab-links"}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>

              <p 
                className={activeTab === "experience" ? "tab-links active-link" : "tab-links"}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </p>

              <p 
                className={activeTab === "education" ? "tab-links active-link" : "tab-links"}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
            </div>

            {/* TAB CONTENTS */}

            {activeTab === "skills" && (
              <div className="tab-contents active-tab">
                <ul>
                  <li><span>Backend</span><br />Java, Spring Boot, REST APIs</li>
                  <li><span>Frontend</span><br />React, JavaScript, HTML, CSS</li>
                  <li><span>Database</span><br />MySQL, PostgreSQL</li>
                </ul>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="tab-contents active-tab">
                <ul>
                  <li><span>2023</span><br />Software Engineer at Infosys</li>
                  <li><span>Internship</span><br />Backend Development</li>
                </ul>
              </div>
            )}

            {activeTab === "education" && (
              <div className="tab-contents active-tab">
                <ul>
                  <li><span>2024-2026</span><br />MS CS - DePaul University</li>
                  <li><span>2019-2023</span><br />BTech - India</li>
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;