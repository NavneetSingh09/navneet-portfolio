function Projects() {

  const projects = [
    {
      title: "Distributed Network Simulator",
      description: "3-node distributed system with Circuit Breaker, DPI engine classifying 6 packet types, WebSocket/STOMP live dashboard, 37 JUnit tests, and GitHub Actions CI/CD deployed on AWS EC2.",
      tech: "Java · Spring Boot · Docker · WebSocket/STOMP · JUnit · GitHub Actions · AWS EC2 · Nginx",
      github: "https://github.com/NavneetSingh09/distributed-network-simulator",
      live: "http://3.142.129.218:8080"
    },
    {
      title: "Vehicle Rental Management System",
      description: "Full-stack app with two-layer security — Spring Security enforces RBAC while service-layer filtering prevents horizontal privilege escalation. Atomic rental creation via @Transactional, secured with JWT + BCrypt.",
      tech: "Java · Spring Boot · Spring Security · MySQL · JWT · BCrypt · JavaScript · AWS EC2",
      github: "https://github.com/NavneetSingh09/vehicle-rental-system-springboot",
      live: "http://3.142.129.218:8081"
    },
    {
      title: "AI Resume Analyzer",
      description: "Full-stack RAG pipeline — PDFBox extracts resume text, chunks and embeds via OpenAI text-embedding-3-small, stores in PostgreSQL with pgvector, and uses GPT-4o-mini to generate structured evaluations via cosine similarity search.",
      tech: "Java · Spring Boot · ReactJS · PostgreSQL (pgvector) · OpenAI API · Apache PDFBox · AWS EC2 · Nginx",
      github: "https://github.com/NavneetSingh09/ai-resume-analyzer",
      live: "http://3.142.129.218:8082"
    }
  ];

  return (
    <section id="projects" className="fade-in">
      <div className="container">
        <h1 className="sub-title">Projects</h1>

        <div className="work-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="card-circle-row">
                <div className="card-circle-wrapper">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <span className="circle-label">GitHub</span>
                </div>
              </div>

              <div className="card-body-row">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="tech-stack">{project.tech}</span>
              </div>

              <div className="card-footer-row">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="gh-link">
                    View Live →
                  </a>
                ) : (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="gh-link">
                    View on GitHub →
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;