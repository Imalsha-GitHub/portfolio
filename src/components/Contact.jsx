const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title fade-in">Let's Connect</h2>
      <div className="contact-content fade-in">
        <p className="contact-description">
          Ready to collaborate on exciting projects or discuss opportunities in data engineering and AI/ML? 
          Let's build something amazing together!
        </p>
        <a href="mailto:imalsha@example.com" className="cta-button">Get In Touch</a>
        <div className="social-links">
          <a href="https://linkedin.com/in/imalsha" className="social-link" target="_blank" rel="noopener noreferrer">💼</a>
          <a href="https://github.com/imalsha" className="social-link" target="_blank" rel="noopener noreferrer">💻</a>
          <a href="mailto:imalsha@example.com" className="social-link">📧</a>
        </div>
      </div>
    </section>
  )
}

export default Contact