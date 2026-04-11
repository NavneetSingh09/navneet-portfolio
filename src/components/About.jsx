import { useState } from "react";

function About() {

  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="fade-in">
      <div className="container">
        <div className="row">

          <div className="about-col-1">
            <div className="about-emoji">👨‍💻</div>
          </div>

          <div className="about-col-2">
            <div className="about-card">
              <h1 className="sub-title">About Me</h1>

              <p>
                MS Computer Science student at DePaul University (GPA 3.5/4.0) with 3 years of industry
                experience at Infosys, where I worked on enterprise-scale microservices for Caterpillar Inc.
                Passionate about backend engineering, distributed systems, and building production-ready
                applications with Java, Spring Boot, and cloud technologies.
              </p>

              <div className="tab-titles">
                <p
                  className={activeTab === "skills" ? "tab-links active-link" : "tab-links"}
                  onClick={() => setActiveTab("skills")}
                >Skills</p>
                <p
                  className={activeTab === "experience" ? "tab-links active-link" : "tab-links"}
                  onClick={() => setActiveTab("experience")}
                >Experience</p>
                <p
                  className={activeTab === "education" ? "tab-links active-link" : "tab-links"}
                  onClick={() => setActiveTab("education")}
                >Education</p>
              </div>

              {activeTab === "skills" && (
                <div className="tab-contents active-tab">
                  <ul>
                    <li><span>Languages</span><br />Java, JavaScript, SQL, HTML/CSS</li>
                    <li><span>Frameworks</span><br />Spring Boot, Spring MVC, Spring Security, ReactJS, Node.js, Express.js</li>
                    <li><span>Databases</span><br />MySQL, PostgreSQL (pgvector), MongoDB</li>
                    <li><span>Cloud & DevOps</span><br />AWS EC2, Docker, Nginx, GitHub Actions CI/CD, systemd</li>
                    <li><span>Tools</span><br />Git, Postman, IntelliJ, JIRA, WebSocket/STOMP, REST APIs, Microservices, JWT/RBAC</li>
                    <li><span>AI/ML</span><br />OpenAI API (GPT-4o-mini, Embeddings), RAG Pipelines</li>
                  </ul>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="tab-contents active-tab">
                  <ul>
                    <li>
                      <span>Sep 2021 – Aug 2024</span><br />
                      Senior Systems Engineer — Infosys Limited, Bangalore
                    </li>
                    <li>
                      <span>Caterpillar Inc. (Fortune 50)</span><br />
                      Decomposed legacy monolith into 8 microservices, reducing MTTR by 40%
                    </li>
                    <li>
                      <span>Backend Optimization</span><br />
                      Reduced API response times by 20% and DB roundtrips by 35% via query optimization
                    </li>
                    <li>
                      <span>SLA Automation</span><br />
                      Built automated breach notification system improving order pickup rates by 20% across 300+ dealerships
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "education" && (
                <div className="tab-contents active-tab">
                  <ul>
                    <li>
                      <span>Sep 2024 – Present</span><br />
                      MS Computer Science — DePaul University, Chicago · GPA: 3.5/4.0
                    </li>
                    <li>
                      <span>Relevant Courses</span><br />
                      OO Software Development, Applied Algorithms, Distributed Systems, Database Systems
                    </li>
                    <li>
                      <span>Aug 2017 – Aug 2021</span><br />
                      BTech Computer Science — Maharishi Markandeshwar University, India · GPA: 7.3/10
                    </li>
                  </ul>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;