import useReveal from "../hooks/useReveal.js";

function Experience() {
  useReveal();
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-head"><div className="eyebrow">Journey</div><h2 className="section-title">Experience &amp; education</h2></div>
        <p className="section-kicker">Building production-ready software while growing a strong full-stack and AI foundation.</p>
        <div className="journey-grid">
          <article className="journey-card reveal"><span className="journey-label">Experience · April 2026 — Present</span><h3>Junior Software Engineer <span>(Dot Net Developer)</span></h3><p className="journey-company">Fusiontec Software · Chennai · Full-time</p><p>Own end-to-end backend and database work, frontend integration, third-party API integrations, and production support across NBFC, SANCO, and KVM projects.</p></article>
          <article className="journey-card reveal"><span className="journey-label">Education · Graduated 2025</span><h3>Bachelor of Engineering <span>— Computer Science</span></h3><p className="journey-company">Paavai Engineering College · CGPA 8.16</p><p>Grounded in computer science fundamentals and prepared for hands-on enterprise software development.</p></article>
          <article className="journey-card reveal"><span className="journey-label">Certification</span><h3>DotNet Full Stack</h3><p className="journey-company">Palle Technologies · Bangalore</p><p>Focused training in full-stack .NET development and the practical foundations used in modern web applications.</p></article>
        </div>
      </div>
    </section>
  );
}
export default Experience;
