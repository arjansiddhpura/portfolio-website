import { Link, Navigate, useParams } from "react-router-dom";
import { ProjectImage } from "../components/ProjectImage";
import { getNextProject, getProject } from "../data/projects";

export function CaseStudy() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const next = getNextProject(project.slug);

  return (
    <main className="case-body wrap">
      <Link className="back" to="/#work">
        ← Work
      </Link>
      <p className="eyebrow">{project.number} / 05</p>
      <h1>{project.title}</h1>
      <p className="subhead">{project.oneLiner}</p>

      <div className="meta">
        <div>
          <p>Role</p>
          <p>{project.role}</p>
        </div>
        <div>
          <p>Type</p>
          <p>{project.type}</p>
        </div>
        <div>
          <p>{project.liveUrl ? "Live" : "Status"}</p>
          {project.liveUrl ? (
            <p>
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                {project.meta}
              </a>
            </p>
          ) : (
            <p>{project.meta}</p>
          )}
        </div>
      </div>

      <div className="media-reveal">
        <ProjectImage
          src={project.image}
          alt={project.title}
          className="hero-image"
          fallback="Product image"
        />
      </div>
      {project.gallery?.map((src) => (
        <div className="media-reveal" key={src}>
          <ProjectImage
            src={src}
            alt={`${project.title} detail`}
            className="hero-image"
            fallback="Product image"
          />
        </div>
      ))}

      <div className="case-cols" style={{ marginTop: 40 }}>
        <div>
          <p className="block-label">What it is</p>
          <p>{project.whatItIs}</p>
        </div>
        <div>
          <p className="block-label">
            {project.slug === "blumecolor" ||
            project.slug === "firetruck-visualizer"
              ? "The idea"
              : "What I made"}
          </p>
          <p>{project.whatIMade}</p>
        </div>
      </div>

      {project.steps && (
        <div style={{ marginTop: 40 }}>
          <p className="block-label">How it works</p>
          <div className="steps" style={{ marginTop: 16 }}>
            {project.steps.map((step, index) => (
              <div className="step" key={step.title}>
                <span>{index + 1}</span>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.cards && (
        <div style={{ marginTop: 40 }}>
          <p className="block-label">
            {project.slug === "rira"
              ? "What the site sells"
              : project.slug === "firetruck-visualizer"
                ? "Three directions"
                : "What it records"}
          </p>
          <div className="cards" style={{ marginTop: 16 }}>
            {project.cards.map((card) => (
              <div className="card" key={card.title}>
                <strong>{card.title}</strong>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {next && (
        <div className="case-next">
          <span>Next project</span>
          <Link to={`/work/${next.slug}`}>{next.title} →</Link>
        </div>
      )}
    </main>
  );
}
