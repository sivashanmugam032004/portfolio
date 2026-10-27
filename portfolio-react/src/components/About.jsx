import useReveal from "../hooks/useReveal.js";

function About() {
  useReveal();
  return (
    <section id="about">
      <div className="container reveal">
        <div className="section-head">
          <div className="eyebrow">About</div>
          <h2 className="section-title">Who I am</h2>
        </div>
        <p className="section-kicker">A closer look at how I work and what I focus on.</p>

        <div className="row">
          <div className="col-lg-7">
            <p className="about-text">
              I am a Junior Software Engineer with hands-on production experience building and supporting
              full-stack applications across fintech, AI-powered analytics, and logistics/manufacturing domains.
              I design complete database architectures, build secure REST APIs with C#, ASP.NET Core, and
              Entity Framework Core, and develop master-data-driven React frontends.
            </p>

            <p className="about-text">
              I work comfortably across the full delivery path: JWT authentication, role-based access,
              third-party API integrations, deployment, and production support. I also train clients and
              resolve live backend and data issues directly on deployed systems.
            </p>

            <p className="about-text">
              A key part of my work is Generative AI integration. I independently built an AI-powered
              natural-language-to-SQL assistant using Google Gemini across a 267-table database, combining
              prompt engineering, schema context, and secure application workflows into a practical tool.
            </p>
          </div>

          <div className="col-lg-5">
            <div className="about-panel">
              <div className="about-meta">
                <div className="meta-row">
                  <span>Role</span>
                  <span>Junior Software Engineer</span>
                </div>
                <div className="meta-row">
                  <span>Company</span>
                  <span>Fusiontec Software</span>
                </div>
                <div className="meta-row">
                  <span>Focus</span>
                  <span>.NET Full Stack · GenAI</span>
                </div>
                <div className="meta-row">
                  <span>Stack</span>
                  <span>React / .NET Core / SQL Server</span>
                </div>
                <div className="meta-row">
                  <span>AI Stack</span>
                  <span>Python · Gemini API · Text-to-SQL</span>
                </div>
                <div className="meta-row">
                  <span>Location</span>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
