import useReveal from "../hooks/useReveal.js";

function Contact() {
  useReveal();
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-panel text-center reveal">
          <div className="eyebrow justify-content-center">Contact</div>
          <h2 className="section-title">Let's build something reliable.</h2>
          <p className="section-kicker mx-auto">
            Open to Full Stack .NET and AI integration roles — reach out through any channel below.
          </p>

          <div className="contact-links">
            <a className="contact-link" href="tel:+918754187717">
              <i className="bi bi-telephone-fill"></i> 8754187717
            </a>
            <a className="contact-link" href="mailto:sivamurugan032004@gmail.com">
              <i className="bi bi-envelope-fill"></i> sivamurugan032004@gmail.com
            </a>
            <a
              className="contact-link"
              href="https://github.com/sivashanmugam032004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i> github.com/sivashanmugam032004
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/sivashanmugam27032004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i> linkedin.com/in/sivashanmugam27032004
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
