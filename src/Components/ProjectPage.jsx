import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/proyects";
import "../styles/ProjectPage.css";

function ProjectPage() {
  const { projectId } = useParams();
  const project = projects.find(p => p.slug === projectId);
  if (!project) return <div className="not-found">Proyecto no encontrado</div>;

  const [mainImg, thumb1, thumb2] = project.images;

  return (
    <div className="project-page-container">
      <div className="project-header">
        <div className="project-info">
          <h1>{project.title}</h1>
          <p className="subtitle">{project.subtitle}</p>
          <p className="description">{project.longDescription}</p>
        </div>
        <div className="project-gallery">
          <img src={mainImg} alt="Principal" className="main-image" />
          <img src={thumb1} alt="Secundaria 1" className="thumb thumb-1" />
          <img src={thumb2} alt="Secundaria 2" className="thumb thumb-2" />
        </div>
      </div>

      <section className="project-details">
        <h3>Características principales</h3>
        <ul>
          {project.features.map((feat, i) => <li key={i}>{feat}</li>)}
          <br />
        </ul>

        <h3>Tecnologías</h3>
        <ul className="tech-list">
          {project.technologies.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul>

        <div className="project-meta">
          <span><strong>Rol:</strong> {project.role}</span>
          <span><strong>Fecha:</strong> {project.date}</span>
          <span><strong>Duración:</strong> {project.duration}</span>
        </div>

        <div className="project-links">
          {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Ver Demo</a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">Ver Código</a>}
        </div>
        <Link to="/" className="back-link">← Volver al inicio</Link>
      </section>
    </div>
  );
}

export default ProjectPage;