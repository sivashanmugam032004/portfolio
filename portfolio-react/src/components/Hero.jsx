import useReveal from "../hooks/useReveal.js";

function Hero() {
  useReveal();
  return (
    <section id="home" className="hero-section">
      <div className="container reveal hero-reveal">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-7">
            <div className="hero-status">
              <span className="pulse"></span>
              JUNIOR SOFTWARE ENGINEER
            </div>

            <h1 className="hero-title">
              M. Sivashanmugam —<br />
              building <span className="accent">secure, intelligent</span>
              <br /> enterprise software.
            </h1>

            <p className="hero-role">
              .NET FULL STACK DEVELOPER <span className="sep">/</span> GENERATIVE AI &amp; LLM INTEGRATION
            </p>

            <p className="hero-description">
              Junior Software Engineer with production experience across fintech, AI-powered analytics,
              and logistics/manufacturing systems. I build secure APIs, thoughtful database architectures,
              and React frontends that solve real operational problems.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary btn-lg">
                View Projects
              </a>
              <a href="/resume.pdf" className="btn btn-outline-dark btn-lg" download="M_Sivashanmugam_Resume.pdf">
                Download Resume
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">267</div>
                <div className="hero-stat-label">DB Tables Mapped</div>
              </div>
              <div>
                <div className="hero-stat-num">3</div>
                <div className="hero-stat-label">Production Systems</div>
              </div>
              <div>
                <div className="hero-stat-num">SQL · AI</div>
                <div className="hero-stat-label">Core Specialty</div>
              </div>
            </div>
          </div>

          {/* Right visual panel */}
          <div className="col-lg-5">
            <div className="hero-stack">
              <div className="hero-profile-card">
              <div className="hero-photo-card">
                <div className="hero-photo-frame">
                  <img src="/images/profile.jpg" className="hero-photo" alt="Profile photo of M Sivashanmugam" />
                </div>
                <div className="hero-photo-meta">
                  <span className="hero-photo-name">M. Sivashanmugam</span>
                  <span className="hero-photo-role">.NET Full Stack · GenAI</span>
                </div>
              </div>

              <div className="hero-panel-top">
                <span className="hero-panel-chip">Enterprise .NET + AI</span>
                <span className="hero-panel-status">In Production</span>
              </div>
              </div>

              <div className="hero-signal-card">
                <div className="hero-panel-visual">
                  <div className="hero-panel-ring"></div>
                  <div className="hero-panel-copy">
                    <span className="hero-panel-label">SANCO AI Assist</span>
                    <h3>Natural language to SQL, built for logistics.</h3>
                    <p>
                      Schema-aware Gemini integration that helps teams query a 267-table operational database.
                    </p>
                  </div>
                </div>

                <div className="hero-panel-list">
                  <div className="hero-panel-item">
                    <strong>React + React Native</strong>
                    <span>Master-data-driven client experiences.</span>
                  </div>
                  <div className="hero-panel-item">
                    <strong>ASP.NET Core</strong>
                    <span>Secure APIs and business logic.</span>
                  </div>
                  <div className="hero-panel-item">
                    <strong>SQL Server</strong>
                    <span>Data-driven rules and reporting.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
