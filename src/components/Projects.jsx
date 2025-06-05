const Projects = () => {
  const projects = [
    {
      title: "Intelligent Data Analytics Platform",
      description: "A comprehensive data analytics platform that leverages machine learning to provide automated insights and predictive analytics for business intelligence.",
      tech: ["Python", "TensorFlow", "Apache Spark", "PostgreSQL"]
    },
    {
      title: "Real-time Data Pipeline",
      description: "Scalable ETL pipeline processing millions of records daily with real-time data streaming and automated quality checks.",
      tech: ["Apache Kafka", "Docker", "AWS", "MongoDB"]
    },
    {
      title: "AI-Powered Recommendation Engine",
      description: "Machine learning-based recommendation system using collaborative filtering and deep learning techniques for personalized user experiences.",
      tech: ["PyTorch", "FastAPI", "Redis", "React"]
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title fade-in">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card fade-in" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span className="tech-tag" key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects