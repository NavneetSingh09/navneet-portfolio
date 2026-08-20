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
                MS Computer Science graduate from DePaul University (GPA 3.5/4.0) with 4+ years of industry
                experience, currently a Software Engineer at MetLife building high-throughput microservices
                and event-driven claims processing systems. Passionate about backend engineering, distributed
                systems, and building production-ready applications with Java, Spring Boot, and cloud technologies.
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
                    <li><span>Messaging</span><br />Apache Kafka, RabbitMQ, Spring Cloud Stream, EDA</li>
                    <li><span>AI/ML</span><br />OpenAI API (GPT-4o, Embeddings), RAG Pipelines</li>
                  </ul>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="tab-contents active-tab">
                  <ul>
                    <li>
                      <span>Jan 2026 – Present</span><br />
                      Software Engineer — MetLife, United States
                    </li>
                    <li>
                      <span>Claims Microservices</span><br />
                      Decomposed legacy policy administration monoliths into domain-driven REST APIs processing 1.2M+ daily insurance claim events with 99.99% uptime
                    </li>
                    <li>
                      <span>Event-Driven Streaming</span><br />
                      Built a Kafka + Spring Cloud Stream pipeline, cutting real-time claim notification latency from 450ms to 85ms
                    </li>
                    <li>
                      <span>RAG & Performance</span><br />
                      Integrated a Spring AI/OpenAI GPT-4o RAG microservice cutting manual document review by 55%, and Redis caching cutting p99 claims API latency by 40%
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "education" && (
                <div className="tab-contents active-tab">
                  <ul>
                    <li>
                      <span>Sep 2024 – Jun 2026</span><br />
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