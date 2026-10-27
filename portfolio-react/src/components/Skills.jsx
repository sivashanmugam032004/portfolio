import skills from "../data/skills.js";
import useReveal from "../hooks/useReveal.js";

function Skills() {
  useReveal();
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Skills</div>
          <h2 className="section-title">Technical toolkit</h2>
        </div>
        <p className="section-kicker">
          The languages, frameworks, and tools I use to ship enterprise software.
        </p>

        {["Core Stack", "AI Engineering", "Delivery"].map((cluster) => (
          <div className={`skill-cluster skill-cluster-${cluster.toLowerCase().replace(" ", "-")}`} key={cluster}>
            <div className="cluster-heading"><span className="cluster-line" />{cluster}<span className="cluster-count">{skills.filter((skill) => skill.cluster === cluster).length} modules</span></div>
            <div className="skills-grid">
              {skills.filter((skill) => skill.cluster === cluster).map((skill) => (
                <article className="skill-card reveal" key={skill.title}>
                  <div className="skill-icon"><i className={`bi ${skill.icon}`}></i></div>
                  <div className="skill-card-heading"><h4>{skill.title}</h4><span className="skill-depth">{skill.core.length >= 3 ? "Core" : "Working"}</span></div>
                  <ul>
                    {skill.items.map((item) => <li key={item}><span>{item}</span><span className={`skill-dot-scale ${skill.core.includes(item) ? "is-core" : ""}`} aria-label={skill.core.includes(item) ? "Core skill" : "Working knowledge"}><i></i><i></i><i></i></span></li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
