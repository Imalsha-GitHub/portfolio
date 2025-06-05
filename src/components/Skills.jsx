const Skills = () => {
  const skills = [
    {
      icon: "🔧",
      title: "Data Engineering",
      description: "Building robust data pipelines and architectures for scalable data processing and analytics."
    },
    {
      icon: "🤖",
      title: "Machine Learning",
      description: "Developing intelligent systems using advanced ML algorithms and statistical modeling techniques."
    },
    {
      icon: "🧠",
      title: "AI Solutions",
      description: "Creating innovative AI-powered applications that solve real-world problems and drive business value."
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title fade-in">Core Expertise</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card fade-in" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills