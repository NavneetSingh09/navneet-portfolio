function Projects() {

  const projects = [
    {
      title: "Resume Analyzer",
      description: "AI-based resume matcher with job recommendations",
      image: "/images/work-1.png",
      github: "https://github.com/NavneetSingh09/ai-resume-analyzer",
      live: "#"
    },
    {
      title: "Spring Boot API",
      description: "User onboarding system with authentication",
      image: "/images/work-2.png",
      github: "https://github.com/NavneetSingh09/vehicle-rental-system-springboot",
      live: "#"
    },
    {
      title: "Distributed Simulator",
      description: "Load balancer + server simulation project",
      image: "/images/work-3.png",
      github: "https://github.com/NavneetSingh09/distributed-network-simulator",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="fade-in">
      <div className="container">
        <h1 className="sub-title">Projects</h1>

        <div className="work-list">
          {projects.map((project, index) => (
            <div className="work" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>

                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;