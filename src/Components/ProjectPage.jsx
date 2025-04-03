import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProjectPage.css";

const ProjectPage = () => {
  
  const { projectId } = useParams();

  return (
    <div className="project-page">
      <h1>Proyecto: {projectId}</h1>
      <p>Contenido detallado para el proyecto {projectId}.</p>
    </div>
  );
};

export default ProjectPage;