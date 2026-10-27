import projects from "../data/projects.js";
import useReveal from "../hooks/useReveal.js";
import SancoDemo from "./SancoDemo.jsx";

function Projects() {
  useReveal();
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Projects</div>
          <h2 className="section-title">Selected projects</h2>
        </div>
        <p className="section-kicker">
          Enterprise systems and AI solutions I have designed, built, and maintained.
        </p>

        <div className="row gy-4">
          {projects.map((project) => (
            <div className="col-lg-12" key={project.index}>
              <article className={`project-card reveal ${project.featured ? "project-featured" : ""}`}>
                <span className="project-index">{project.index}</span>

                <h3 className="project-title">{project.title}</h3>

                <div className="project-role"><span className="role-mark">ROLE</span>{project.role}</div>

                <div className="project-stack">
                  {project.stack.map((tech, i) => (
                    <span key={tech}>
                      {tech}
                      {i < project.stack.length - 1 && <span className="pipe">|</span>}
                    </span>
                  ))}
                </div>

                <p className="project-description">{project.description}</p>

                {project.caseStudy ? (
                  <div className="case-study" aria-label="SANCO AI Assist case study">
                    {project.caseStudy.map((stage) => (
                      <section className="case-study-stage" key={stage.number}>
                        <div className="case-study-marker"><span>{stage.number}</span></div>
                        <div><h5>{stage.label}</h5><p>{stage.text}</p></div>
                      </section>
                    ))}
                  </div>
                ) : (
                  <><h5 className="project-subtitle">Highlights</h5><ul className="project-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></>
                )}

                <p className="project-impact"><span>IMPACT</span>{project.impact}</p>

                <h5 className="project-subtitle mt-4">Technologies Used</h5>
                <div className="d-flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <span className="badge" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </article>
              {project.featured && <SancoDemo />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
