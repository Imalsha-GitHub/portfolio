import { useEffect, useState } from 'react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Data Engineer",
    "AI/ML Developer", 
    "Software Engineer",
    "Data Scientist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Animated Background Elements */}
      <div className="hero-bg">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Profile Image */}
          <div className="profile-section">
            <div className="profile-image">
              <div className="profile-placeholder">IJ</div>
              <div className="profile-ring"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-name">
              <span>Imalsha</span>
              <span className="highlight">Jathunarachchi</span>
            </h1>
            
            <div className="hero-role">
              <span>I'm a </span>
              <span className="rotating-text" key={currentRole}>
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="hero-description">
              Third Year CS Undergraduate at University of Colombo School of Computing.
              Passionate about transforming data into intelligence through innovative 
              AI/ML solutions and robust data engineering.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <span>Hire Me</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#projects" className="btn-secondary">
                <span>View Work</span>
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default Hero